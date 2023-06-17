import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dropdown, HistoryList, HistoryOption, HistoryPanel } from './styled';
import ChevronDown from '../svg/ChevronDown';

class HistoryClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
		this.dropdown = createRef();
		this.documentHandler = this.documentHandler.bind(this);
	}

	documentHandler = (e) => {
		if (!this.dropdown.current) return;
		if (!this.dropdown.current.contains(e.target)) {
			this.setState({ isOpen: false });
		}
	};

	componentDidMount() {
		document.addEventListener('click', this.documentHandler, true);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.documentHandler, true);
	}

	handleClick = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<Dropdown ref={this.dropdown}>
				<HistoryPanel onClick={() => this.handleClick()}>
					History <ChevronDown />
				</HistoryPanel>
				{this.state.isOpen && (
					<HistoryList>
						{this.props.history.length === 0
							? 'History is empty!'
							: this.props.history.map((calculation, i) => {
									return (
										<HistoryOption onClick={() => this.handleClick()} key={i}>
											{calculation}
										</HistoryOption>
									);
							  })}
					</HistoryList>
				)}
			</Dropdown>
		);
	}
}

const mapStateToProps = (state) => ({
	history: state.history,
});

HistoryClass.propTypes = {
	history: PropTypes.arrayOf(PropTypes.string),
};

export default connect(mapStateToProps)(HistoryClass);
