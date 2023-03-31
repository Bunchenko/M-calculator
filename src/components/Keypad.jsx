import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	add,
	divide,
	emptyCurrentOperand,
	multiply,
	setValue,
	subtract,
} from '../store/slices/calculator';

const Keypad = ({ handleButtonClick }) => {
	const currentOperand = useSelector((state) => state.calculator.currentOperand);
	const dispatch = useDispatch();

	const [currentCommand, setCurrentCommand] = useState(null);

	const handleCommand = (operation) => {
		switch (operation) {
			case '+':
				setCurrentCommand(() => add);
				break;
			case '-':
				setCurrentCommand(() => subtract);
				break;
			case '*':
				setCurrentCommand(() => multiply);
				break;
			case '/':
				setCurrentCommand(() => divide);
				break;
			default:
				setCurrentCommand(null);
		}
	};

	return (
		<div>
			{new Array(10).fill(null).map((_, i) => {
				return (
					<button key={i} onClick={() => handleButtonClick(i)}>
						{i}
					</button>
				);
			})}

			{['+', '-', '*', '/'].map((operation) => {
				console.log(operation);
				return (
					<button
						key={operation}
						onClick={() => {
							if (currentOperand) {
								if (currentCommand) {
									dispatch(currentCommand(+currentOperand));
								} else {
									dispatch(setValue(+currentOperand));
								}
							}
							dispatch(emptyCurrentOperand());
							handleCommand(operation);
						}}
					>
						{operation}
					</button>
				);
			})}

			<button
				onClick={() => {
					if (!(currentCommand && currentOperand)) return;

					dispatch(currentCommand(+currentOperand));
					dispatch(emptyCurrentOperand());
					setCurrentCommand(null);
				}}
			>
				=
			</button>
		</div>
	);
};

export default Keypad;
