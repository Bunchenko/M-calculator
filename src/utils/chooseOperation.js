import { AddCommand, DivideCommand, MultiplyCommand, SubtractCommand } from "../services/calculator";

function chooseOperation(operation, currentOperand) {
	switch (operation) {
		case '+':
			return new AddCommand(+currentOperand)
		case '-':
			return new SubtractCommand(+currentOperand)
		case '*':
			return new MultiplyCommand(+currentOperand)
		case '/':
			return new DivideCommand(+currentOperand)
		default:
			return;
	}
}

export default chooseOperation