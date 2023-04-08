import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CalculationError from '../../services/calculationError';
import { DisplayContainer, Input } from './styled';

class DisplayClass extends Component {
	render() {
		if (isNaN(this.props.currentValue) || this.props.currentValue === Infinity) {
			throw new CalculationError('Invalid operation!');
		}
		const operation = this.props.currentOperation || '';

		return (
			<DisplayContainer>
				<Input type='text' value={`${this.props.currentValue} ${operation} `} disabled />
				<Input type='text' value={`${this.props.currentOperand}  `} disabled />
			</DisplayContainer>
		);
	}
}

const mapStateToProps = (state) => ({
	currentValue: state.calculator.value,
	currentOperand: state.calculator.currentOperand,
	currentOperation: state.calculator.currentOperation,
});

DisplayClass.propTypes = {
	currentValue: PropTypes.number,
	currentOperand: PropTypes.string,
	currentOperation: PropTypes.string,
};

export default connect(mapStateToProps)(DisplayClass);
