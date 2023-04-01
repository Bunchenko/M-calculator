import { createSlice } from '@reduxjs/toolkit';
import calculator, { AddCommand, DivideCommand, MultiplyCommand, SubtractCommand } from '../../services/calculator';

export const calculatorSlice = createSlice({
	name: 'calculator',
	initialState: {
		value: 0,
		history: [],
		currentOperand: '',
		currentOperation: null
	},
	reducers: {
		setValue: (state, action) => {
			calculator.value = action.payload;
			state.value = calculator.value;
		},
		calculate: state => {
			let operation;
			switch (state.currentOperation) {
				case '+':
					operation = new AddCommand(+state.currentOperand)
					break;
				case '-':
					operation = new SubtractCommand(+state.currentOperand)
					break;
				case '*':
					operation = new MultiplyCommand(+state.currentOperand)
					break;
				case '/':
					operation = new DivideCommand(+state.currentOperand)
					break;
				default:
					return;
			}
			calculator.executeCommand(operation);
			state.history.push(
				`${state.value} ${state.currentOperation} ${+state.currentOperand} = ${calculator.value}`
			);
			state.value = calculator.value
		},
		clear: state => {
			calculator.value = 0;
			state.value = 0;
			state.currentOperand = ''
			state.currentOperation = null
		},
		clearHistory: state => {
			calculator.history = [];
			state.history = [];
		},
		clearAll: state => {
			calculator.value = 0;
			state.value = 0;
			calculator.history = [];
			state.history = [];
			state.currentOperand = ''
			state.currentOperation = null
		},
		undo: state => {
			calculator.undo()
			state.value = calculator.value
			state.history.pop()
			state.currentOperation = null
		},
		setCurrentOperation: (state, action) => {
			state.currentOperation = action.payload
		},
		setCurrentOperand: (state, action) => {
			if (!action.payload) {
				state.currentOperand = ''
			} else {
				state.currentOperand += action.payload
			}
		}
	}
})

export const {
	setValue,
	calculate,
	undo,
	clear,
	clearHistory,
	clearAll,
	setCurrentOperation,
	setCurrentOperand
} = calculatorSlice.actions

export default calculatorSlice.reducer