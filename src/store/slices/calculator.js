import { createSlice } from '@reduxjs/toolkit';
import calculator, { AddCommand, DivideCommand, MultiplyCommand, SubtractCommand } from '../../services/calculator';

export const calculatorSlice = createSlice({
	name: 'calculator',
	initialState: {
		value: 0,
		history: []
	},
	reducers: {
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
		},
		undo: state => {
			calculator.undo()
			state.value = calculator.value
			state.history.pop()
		}
	}
})

export const {
	add,
	subtract,
	multiply,
	divide,
	undo,
	clear,
	clearHistory,
	clearAll
} = calculatorSlice.actions

export default calculatorSlice.reducer