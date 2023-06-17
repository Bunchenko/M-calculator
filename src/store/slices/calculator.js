import { createSlice } from '@reduxjs/toolkit';
import calculator from '../../services/calculator';
import chooseOperation from '../../utils/chooseOperation';
import formatValue from '../../utils/formatValue';
import { calculate, clearAll, undo } from '../actions';

export const calculatorSlice = createSlice({
	name: 'calculator',
	initialState: {
		value: 0,
		currentOperand: '',
		currentOperation: null
	},
	reducers: {
		setValue: (state, action) => {
			calculator.value = action.payload;
			state.value = calculator.value;
		},
		clear: state => {
			calculator.value = 0;
			state.value = 0;
			state.currentOperand = ''
			state.currentOperation = null
		},
		setCurrentOperation: (state, action) => {
			state.currentOperation = action.payload
		},
		setCurrentOperand: (state, action) => {
			let value = action.payload;
			if (value === '') {
				//empty string as a passed value is a sign to empty current operand
				state.currentOperand = '';
			} else if (typeof value === 'string' || typeof value === 'number') {
				state.currentOperand += formatValue(value, state.currentOperand);
			}
		}
	},
	extraReducers(builder) {
		builder
			.addCase(calculate, state => {
				let operation = chooseOperation(state.currentOperation, state.currentOperand);
				calculator.executeCommand(operation);
				//FIX:
				//this reducer can be executed slower than calculate
				//in history reducer => calculator.value there will be incorrect
				state.value = calculator.value
			})
			.addCase(clearAll, state => {
				calculator.value = 0;
				state.value = 0;
				state.currentOperand = ''
				state.currentOperation = null
			})
			.addCase(undo, state => {
				calculator.undo()
				state.value = calculator.value
				state.currentOperation = null
			})
	}
})

export const {
	setValue,
	clear,
	setCurrentOperation,
	setCurrentOperand
} = calculatorSlice.actions

export default calculatorSlice.reducer