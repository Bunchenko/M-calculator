import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
	const currentCalculatorValue = useSelector((state) => state.calculator.value);
	const currentOperand = useSelector((state) => state.calculator.currentOperand);

	return (
		<div>
			<h1>{currentCalculatorValue}</h1>
			<input type='text' value={currentOperand} disabled />
		</div>
	);
};

export default Display;
