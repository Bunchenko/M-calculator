import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	calculate,
	setCurrentOperand,
	setCurrentOperation,
	setValue,
} from '../../store/slices/calculator';
import { KeypadButton, KeypadContainer } from './styled';

const Keypad = () => {
	const currentOperand = useSelector((state) => state.calculator.currentOperand);
	const currentOperation = useSelector((state) => state.calculator.currentOperation);
	const dispatch = useDispatch();

	const handleOperationClick = (operation) => {
		if (currentOperand) {
			if (currentOperation) {
				dispatch(calculate());
			} else {
				dispatch(setValue(+currentOperand));
			}
		}
		dispatch(setCurrentOperand(''));
		dispatch(setCurrentOperation(operation));
	};

	const handleEqualsClick = () => {
		if (!(currentOperation && currentOperand)) return;

		dispatch(calculate());
		dispatch(setCurrentOperand(''));
		dispatch(setCurrentOperation(null));
	};

	const renderedDigitButtons = new Array(10).fill(null).map((_, i) => {
		let digit = Math.abs(i - 9);
		return (
			<KeypadButton
				key={digit}
				onClick={() => dispatch(setCurrentOperand(digit))}
				data-cy={`digit-${digit}`}
			>
				{digit}
			</KeypadButton>
		);
	});

	const renderedOperationButtons = ['+', '-', '*', '/'].map((operation) => {
		return (
			<KeypadButton
				functional
				isCurrent={operation === currentOperation}
				key={operation}
				onClick={() => handleOperationClick(operation)}
				data-cy={`operation-${operation}`}
			>
				{operation}
			</KeypadButton>
		);
	});

	return (
		<KeypadContainer>
			{renderedDigitButtons}
			{renderedOperationButtons}
			<KeypadButton functional onClick={handleEqualsClick} data-cy='equals'>
				=
			</KeypadButton>
			<KeypadButton functional onClick={() => dispatch(setCurrentOperand('.'))} data-cy='point'>
				.
			</KeypadButton>
		</KeypadContainer>
	);
};

export default Keypad;
