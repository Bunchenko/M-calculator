import React, { Component } from 'react';
import { calculate, setCurrentOperand, setCurrentOperation, setValue } from '../../store/';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { KeypadButton, KeypadContainer } from './styled';

class KeypadClass extends Component {
	renderedDigitButtons = new Array(10).fill(null).map((_, i) => {
		let digit = Math.abs(i - 9);
		return (
			<KeypadButton key={digit} onClick={() => this.props.setCurrentOperand(digit)}>
				{digit}
			</KeypadButton>
		);
	});

	handleOperationClick = (operation) => {
		if (this.props.currentOperand) {
			if (this.props.currentOperation) {
				this.props.calculate({
					currentValue: this.props.currentCalculatorValue,
					currentOperation: this.props.currentOperation,
					currentOperand: this.props.currentOperand,
				});
			} else {
				this.props.setValue(+this.props.currentOperand);
			}
		}
		this.props.setCurrentOperand('');
		this.props.setCurrentOperation(operation);
	};

	handleEqualsClick = () => {
		if (!(this.props.currentOperation && this.props.currentOperand)) return;

		this.props.calculate({
			currentValue: this.props.currentCalculatorValue,
			currentOperation: this.props.currentOperation,
			currentOperand: this.props.currentOperand,
		});
		this.props.setCurrentOperand('');
		this.props.setCurrentOperation(null);
	};

	render() {
		return (
			<KeypadContainer>
				{this.renderedDigitButtons}
				{['+', '-', '*', '/'].map((operation) => {
					return (
						<KeypadButton
							functional
							isCurrent={operation === this.props.currentOperation}
							key={operation}
							onClick={() => this.handleOperationClick(operation)}
						>
							{operation}
						</KeypadButton>
					);
				})}
				<KeypadButton functional onClick={() => this.handleEqualsClick()}>
					=
				</KeypadButton>
				<KeypadButton functional onClick={() => this.props.setCurrentOperand('.')}>
					.
				</KeypadButton>
			</KeypadContainer>
		);
	}
}

const mapStateToProps = (state) => ({
	currentOperand: state.calculator.currentOperand,
	currentOperation: state.calculator.currentOperation,
	currentCalculatorValue: state.calculator.value,
});

const mapDispatchToProps = { calculate, setCurrentOperand, setCurrentOperation, setValue };

KeypadClass.propTypes = {
	currentOperand: PropTypes.string,
	currentOperation: PropTypes.string,
	currentCalculatorValue: PropTypes.number,
	calculate: PropTypes.func,
	setCurrentOperand: PropTypes.func,
	setCurrentOperation: PropTypes.func,
	setValue: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(KeypadClass);
