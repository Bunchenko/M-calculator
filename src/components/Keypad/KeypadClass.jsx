import React, { Component } from 'react';
import {
	calculate,
	setCurrentOperand,
	setCurrentOperation,
	setValue,
} from '../../store/slices/calculator';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class KeypadClass extends Component {
	renderedDigitButtons = new Array(10).fill(null).map((_, i) => {
		return (
			<button key={i} onClick={() => this.props.setCurrentOperand(i)}>
				{i}
			</button>
		);
	});

	renderedOperationButtons = ['+', '-', '*', '/'].map((operation) => {
		return (
			<button key={operation} onClick={() => this.handleOperationClick(operation)}>
				{operation}
			</button>
		);
	});

	handleOperationClick = (operation) => {
		if (this.props.currentOperand) {
			if (this.props.currentOperation) {
				this.props.calculate();
			} else {
				this.props.setValue(+this.props.currentOperand);
			}
		}
		this.props.setCurrentOperand('');
		this.props.setCurrentOperation(operation);
	};

	handleEqualsClick = () => {
		if (!(this.props.currentOperation && this.props.currentOperand)) return;

		this.props.calculate();
		this.props.setCurrentOperand('');
		this.props.setCurrentOperation(null);
	};

	render() {
		return (
			<div>
				{this.renderedDigitButtons}
				{this.renderedOperationButtons}
				<button onClick={() => this.handleEqualsClick()}>=</button>
				<button onClick={() => this.props.setCurrentOperand('.')}>.</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentOperand: state.calculator.currentOperand,
	currentOperation: state.calculator.currentOperation,
});

const mapDispatchToProps = { calculate, setCurrentOperand, setCurrentOperation, setValue };

KeypadClass.propTypes = {
	currentOperand: PropTypes.string,
	currentOperation: PropTypes.string,
	calculate: PropTypes.func,
	setCurrentOperand: PropTypes.func,
	setCurrentOperation: PropTypes.func,
	setValue: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(KeypadClass);
