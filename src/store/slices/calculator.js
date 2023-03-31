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
		add: (state, action) => {
			calculator.executeCommand(new AddCommand(action.payload))
			state.history.push(`${state.value} + ${action.payload} = ${calculator.value}`)
			state.value = calculator.value
		},
		subtract: (state, action) => {
			calculator.executeCommand(new SubtractCommand(action.payload))
			state.history.push(`${state.value} - ${action.payload} = ${calculator.value}`)
			state.value = calculator.value
		},
		multiply: (state, action) => {
			calculator.executeCommand(new MultiplyCommand(action.payload))
			state.history.push(`${state.value} * ${action.payload} = ${calculator.value}`)
			state.value = calculator.value
		},
		divide: (state, action) => {
			calculator.executeCommand(new DivideCommand(action.payload))
			state.history.push(`${state.value} / ${action.payload} = ${calculator.value}`)
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
		},
		setCurrentOperation: (state, action) => {
			state.currentOperation = action.payload
		},
		setCurrentOperand: (state, action) => {
			state.currentOperand += action.payload
		},
		emptyCurrentOperand: state => {
			state.currentOperand = ''
		}
	}
})

export const {
	setValue,
	add,
	subtract,
	multiply,
	divide,
	undo,
	clear,
	clearHistory,
	clearAll,
	setCurrentOperation,
	setCurrentOperand,
	emptyCurrentOperand
} = calculatorSlice.actions

export default calculatorSlice.reducer