class CalculationError extends Error {
	constructor(message) {
		super(message);
		this.name = 'CalculationError'
	}
}

export default CalculationError