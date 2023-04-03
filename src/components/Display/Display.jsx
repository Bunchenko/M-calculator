import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
	const currentCalculatorValue = useSelector((state) => state.calculator.value);
	const currentOperand = useSelector((state) => state.calculator.currentOperand);

	return (
		<div>
			<input type='text' value={currentCalculatorValue} disabled />
			<input type='text' value={currentOperand} disabled />
		</div>
	);
};

export default Display;
