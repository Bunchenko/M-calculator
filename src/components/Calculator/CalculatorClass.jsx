import React, { Component } from 'react';
import HistoryClass from '../History/HistoryClass';
import ControlPanelClass from '../ControlPanel/ControlPanelClass';
import DisplayClass from '../Display/DisplayClass';
import KeypadClass from '../Keypad/KeypadClass';

export default class CalculatorClass extends Component {
	render() {
		return (
			<div>
				<HistoryClass />
				<ControlPanelClass />
				<DisplayClass />
				<KeypadClass />
			</div>
		);
	}
}
