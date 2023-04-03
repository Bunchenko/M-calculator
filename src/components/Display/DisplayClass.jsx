import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class DisplayClass extends Component {
	render() {
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
