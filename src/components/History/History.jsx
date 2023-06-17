import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Dropdown, HistoryList, HistoryOption, HistoryPanel } from './styled';
import ChevronDown from '../svg/ChevronDown';

const History = () => {
	const history = useSelector((state) => state.calculator.history);

	const [isOpen, setIsOpen] = useState(false);
	const dropdown = useRef();

	useEffect(() => {
		const handler = (e) => {
			if (!dropdown.current) return;
			if (!dropdown.current.contains(e.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', handler, true);

		return () => {
			document.removeEventListener('click', handler, true);
		};
	}, []);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const renderedHistory =
		history.length === 0
			? 'History is empty!'
			: history.map((calculation, i) => {
					return (
						<HistoryOption onClick={handleClick} key={i}>
							{calculation}
						</HistoryOption>
					);
			  });

	return (
		<Dropdown ref={dropdown}>
			<HistoryPanel onClick={handleClick} data-cy='history-panel'>
				History <ChevronDown />
			</HistoryPanel>
			{isOpen && <HistoryList data-cy='history-list'>{renderedHistory}</HistoryList>}
		</Dropdown>
	);
};

export default History;
