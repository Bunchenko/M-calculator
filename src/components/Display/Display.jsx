import React from 'react';
import { useSelector } from 'react-redux';
import CalculationError from '../../services/calculationError';

const Display = () => {
	const currentCalculatorValue = useSelector((state) => state.calculator.value);
	const currentOperand = useSelector((state) => state.calculator.currentOperand);

	if (isNaN(currentCalculatorValue) || currentCalculatorValue === Infinity) {
		throw new CalculationError('Invalid operation!');
	}

	return (
		<div>
			<input type='text' value={currentCalculatorValue} disabled />
			<input type='text' value={currentOperand} disabled />
		</div>
	);
};

export default Display;
