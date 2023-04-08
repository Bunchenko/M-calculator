import React, { Component } from 'react';
import { ErrorMessage } from './styled';

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, isCalculationError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		if (error.name === 'CalculationError') {
			this.setState({ ...this.state, isCalculationError: true });
		} else {
			console.log(error);
		}
	}

	render() {
		if (this.state.hasError && this.state.isCalculationError) {
			return <ErrorMessage>Please, restart the app and correct your expression!</ErrorMessage>;
		}
		if (this.state.hasError) {
			return <ErrorMessage>Some error occurred, please, restart the app!</ErrorMessage>;
		}

		return this.props.children;
	}
}
