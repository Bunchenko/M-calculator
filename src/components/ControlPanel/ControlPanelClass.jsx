import React, { Component } from 'react';
import { clearAll, clearHistory, undo } from '../../store/slices/calculator';
import { clear } from '@testing-library/user-event/dist/clear';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ControlPanelClass extends Component {
	render() {
		return (
			<div>
				<button onClick={() => this.props.undo()}>Undo</button>
				<button onClick={() => this.props.clear()}>Clear</button>
				<button onClick={() => this.props.clearHistory()}>Clear history</button>
				<button onClick={() => this.props.clearAll()}>Clear All</button>
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
