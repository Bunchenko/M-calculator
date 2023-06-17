import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer, {
	setValue,
	clear,
	setCurrentOperation,
	setCurrentOperand
} from './slices/calculator'
import historyReducer, { clearHistory } from './slices/history'
import { calculate, clearAll, undo } from './actions'

const store = configureStore({
	reducer: {
		calculator: calculatorReducer,
		history: historyReducer
	}
})

export default store
export {
	setValue,
	clear,
	setCurrentOperand,
	setCurrentOperation,
	clearHistory,
	calculate,
	clearAll,
	undo
}