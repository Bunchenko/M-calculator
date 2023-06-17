import { createSlice } from "@reduxjs/toolkit";
import calculator from "../../services/calculator";
import { calculate, clearAll, undo } from "../actions";

export const historySlice = createSlice({
	name: 'history',
	initialState: [],
	reducers: {
		clearHistory: () => {
			calculator.history = [];
			return [];
		},
	},
	extraReducers(builder) {
		builder
			.addCase(calculate, (state, action) => {
				const { currentValue, currentOperation, currentOperand } = action.payload;
				state.push(
					//FIX:
					//this reducer can be executed faster than calculate
					//in calculator reducer => calculator.value will be incorrect
					`${currentValue} ${currentOperation} ${+currentOperand} = ${calculator.value}`
				);
			})
			.addCase(clearAll, () => {
				calculator.history = [];
				return [];
			})
			.addCase(undo, state => {
				state.pop()
			})
	}
})

export const { clearHistory } = historySlice.actions
export default historySlice.reducer