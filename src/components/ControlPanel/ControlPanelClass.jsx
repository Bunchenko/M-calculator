import React, { Component } from 'react';
import { clearAll, clearHistory, undo, clear } from '../../store/slices/calculator';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

class ControlPanelClass extends Component {
	render() {
		return (
			<div>
				<Button onClick={() => this.props.undo()}>Undo</Button>
				<Button onClick={() => this.props.clear()}>Clear</Button>
				<Button onClick={() => this.props.clearHistory()}>Clear history</Button>
				<Button onClick={() => this.props.clearAll()}>Clear All</Button>
			</div>
		);
	}
}

const mapDispatchToProps = { undo, clearHistory, clearAll, clear };

ControlPanelClass.propTypes = {
	undo: PropTypes.func,
	clearHistory: PropTypes.func,
	clearAll: PropTypes.func,
	clear: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(ControlPanelClass);
