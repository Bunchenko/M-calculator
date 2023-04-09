import React from 'react';
import { useSelector } from 'react-redux';
import CalculationError from '../../services/calculationError';
import { DisplayContainer, Input } from './styled';

const Display = () => {
	const currentCalculatorValue = useSelector((state) => state.calculator.value);
	const currentOperand = useSelector((state) => state.calculator.currentOperand);
	const currentOperation = useSelector((state) => state.calculator.currentOperation);

	if (isNaN(currentCalculatorValue) || currentCalculatorValue === Infinity) {
		throw new CalculationError('Invalid operation!');
	}
	const operation = currentOperation || '';

	return (
		<DisplayContainer>
			<Input
				type='text'
				value={`${currentCalculatorValue} ${operation} `}
				disabled
				data-cy='display-result'
			/>
			<Input type='text' value={`${currentOperand}  `} disabled data-cy='display-current-operand' />
		</DisplayContainer>
	);
};

export default Display;
