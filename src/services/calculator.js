class Calculator {
	constructor() {
		this.value = 0;
		this.history = [];
	}

	executeCommand(command) {
		this.value = command.execute(this.value);
		this.history.push(command);
	}

	undo() {
		if (!this.history.length) return;

		const command = this.history.pop();
		this.value = command.undo(this.value)
	}
}

class AddCommand {
	constructor(valueToAdd) {
		this.valueToAdd = valueToAdd
	}

	execute(currentValue) {
		return currentValue + this.valueToAdd
	}

	undo(currentValue) {
		return currentValue - this.valueToAdd
	}
}

class SubtractCommand {
	constructor(valueToSubtract) {
		this.valueToSubtract = valueToSubtract
	}

	execute(currentValue) {
		return currentValue - this.valueToSubtract
	}

	undo(currentValue) {
		return currentValue + this.valueToSubtract
	}
}

class MultiplyCommand {
	constructor(valueToMultiply) {
		this.valueToMultiply = valueToMultiply
	}

	execute(currentValue) {
		return currentValue * this.valueToMultiply
	}

	undo(currentValue) {
		return currentValue / this.valueToMultiply
	}
}

class DivideCommand {
	constructor(valueToDivide) {
		this.valueToDivide = valueToDivide
	}

	execute(currentValue) {
		return currentValue / this.valueToDivide
	}

	undo(currentValue) {
		return currentValue * this.valueToDivide
	}
}

export default new Calculator();
export { AddCommand, SubtractCommand, MultiplyCommand, DivideCommand }