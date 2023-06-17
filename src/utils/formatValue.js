function formatValue(value, currentOperand) {
	switch (value) {
		case '.':
			if (currentOperand.includes('.')) return '';
			if (currentOperand === '') return '0.';
			return value
		default:
			return value
	}
}

export default formatValue