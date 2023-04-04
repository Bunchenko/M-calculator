import React, { Component } from 'react';
import HistoryClass from '../History/HistoryClass';
import ControlPanelClass from '../ControlPanel/ControlPanelClass';
import DisplayClass from '../Display/DisplayClass';
import KeypadClass from '../Keypad/KeypadClass';
import ErrorBoundary from '../ErrorBoundary';

export default class CalculatorClass extends Component {
	render() {
		return (
			<div>
				<ErrorBoundary>
					<HistoryClass />
					<ControlPanelClass />
					<DisplayClass />
					<KeypadClass />
				</ErrorBoundary>
			</div>
		);
	}
}
