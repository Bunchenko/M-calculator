import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	add,
	divide,
	emptyCurrentOperand,
	multiply,
	setCurrentOperand,
	setCurrentOperation,
	setValue,
	subtract,
} from '../store/slices/calculator';

const Keypad = () => {
	const currentOperand = useSelector((state) => state.calculator.currentOperand);
	const currentOperation = useSelector((state) => state.calculator.currentOperation);
	const dispatch = useDispatch();

	const dispatchOperation = () => {
		switch (currentOperation) {
			case '+':
				dispatch(add(+currentOperand));
				break;
			case '-':
				dispatch(subtract(+currentOperand));
				break;
			case '*':
				dispatch(multiply(+currentOperand));
				break;
			case '/':
				dispatch(divide(+currentOperand));
				break;
			default:
				return;
		}
	};

	const handleOperationClick = (operation) => {
		if (currentOperand) {
			if (currentOperation) {
				dispatchOperation();
			} else {
				dispatch(setValue(+currentOperand));
			}
		}
		dispatch(emptyCurrentOperand());
		dispatch(setCurrentOperation(operation));
	};

	const handleEqualsClick = () => {
		if (!(currentOperation && currentOperand)) return;

		dispatchOperation();
		dispatch(emptyCurrentOperand());
		dispatch(setCurrentOperation(null));
	};

	return (
		<div>
			{new Array(10).fill(null).map((_, i) => {
				return (
					<button key={i} onClick={() => dispatch(setCurrentOperand(i))}>
						{i}
					</button>
				);
			})}

			{['+', '-', '*', '/'].map((operation) => {
				return (
					<button key={operation} onClick={() => handleOperationClick(operation)}>
						{operation}
					</button>
				);
			})}

			<button onClick={handleEqualsClick}>=</button>
		</div>
	);
};

export default Keypad;
