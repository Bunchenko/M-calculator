import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Keypad from './Keypad';
import History from './History';

import { clear, clearAll, clearHistory, undo } from '../store/slices/calculator';
import Display from './Display';
import ControlPanel from './ControlPanel';

function Calculator() {
	const currentCalculatorValue = useSelector((state) => state.calculator.value);
	const dispatch = useDispatch();

	const [inputValue, setInputValue] = useState('');
	const [currentOperand, setCurrentOperand] = useState('');

	const handleClick = (value) => {
		setCurrentOperand((p) => p + value);
	};

	return (
		<div className='Calculator'>
			<History />
			<ControlPanel />
			<Display />
			<Keypad
				handleClick={handleClick}
				currentOperand={currentOperand}
				setCurrentOperand={setCurrentOperand}
			/>

			<h1>{currentCalculatorValue}</h1>
			<input type='text' value={inputValue} disabled />
			<input type='text' value={currentOperand} disabled />

			<button onClick={() => dispatch(undo())}>Undo</button>
			<button onClick={() => dispatch(clear())}>Clear</button>
			<button onClick={() => dispatch(clearHistory())}>Clear history</button>
			<button onClick={() => dispatch(clearAll())}>Clear All</button>
		</div>
	);
}

export default Calculator;
