import React from 'react';
import { useSelector } from 'react-redux';

const History = () => {
	const history = useSelector((state) => state.calculator.history);

	return (
		<div>
			<h1>History</h1>
			<ul>
				{history.map((calculation, i) => {
					return <li key={i}>{calculation}</li>;
				})}
			</ul>
		</div>
	);
};

export default History;
