import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	calculate,
	setCurrentOperand,
	setCurrentOperation,
	setValue,
} from '../store/slices/calculator';

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
		return (
			<button key={i} onClick={() => dispatch(setCurrentOperand(i))}>
				{i}
			</button>
		);
	});

	const renderedOperationButtons = ['+', '-', '*', '/'].map((operation) => {
		return (
			<button key={operation} onClick={() => handleOperationClick(operation)}>
				{operation}
			</button>
		);
	});

	return (
		<div>
			{renderedDigitButtons}
			{renderedOperationButtons}
			<button onClick={handleEqualsClick}>=</button>
		</div>
	);
};

export default Keypad;
