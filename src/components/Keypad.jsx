import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add, divide, multiply, subtract } from '../store/slices/calculator';

const Keypad = ({ handleClick, currentOperand, setCurrentOperand }) => {
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
					<button key={i} onClick={() => handleClick(i)}>
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
							if (currentCommand && currentOperand) {
								dispatch(currentCommand(+currentOperand));
								setCurrentOperand('');
							}
							handleCommand(operation);
						}}
					>
						{operation}
					</button>
				);
			})}

			<button
				onClick={() => {
					dispatch(currentCommand(+currentOperand));
					setCurrentOperand('');
					setCurrentCommand(null);
				}}
			>
				=
			</button>
		</div>
	);
};

export default Keypad;
