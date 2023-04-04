import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CalculationError from '../../services/calculationError';

class DisplayClass extends Component {
	render() {
		if (isNaN(this.props.currentValue) || this.props.currentValue === Infinity) {
			throw new CalculationError('Invalid operation!');
		}

		return (
			<div>
				<input type='text' value={this.props.currentValue} disabled />
				<input type='text' value={this.props.currentOperand} disabled />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentValue: state.calculator.value,
	currentOperand: state.calculator.currentOperand,
});

DisplayClass.propTypes = {
	currentValue: PropTypes.number,
	currentOperand: PropTypes.string,
};

export default connect(mapStateToProps)(DisplayClass);
