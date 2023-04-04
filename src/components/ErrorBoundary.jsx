import React, { Component } from 'react';

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
			return <h1>Please, correct your expression and restart the app!</h1>;
		}
		if (this.state.hasError) {
			return <h1>Some error occurred, please, restart the app!</h1>;
		}

		return this.props.children;
	}
}
