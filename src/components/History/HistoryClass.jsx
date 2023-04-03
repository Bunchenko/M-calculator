import React, { Component } from 'react';
import { connect } from 'react-redux';

class HistoryClass extends Component {
	render() {
		return (
			<div>
				<h1>History</h1>
				<ul>
					{this.props.history.map((calculation, i) => {
						return <li key={i}>{calculation}</li>;
					})}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	history: state.calculator.history,
});

export default connect(mapStateToProps)(HistoryClass);
