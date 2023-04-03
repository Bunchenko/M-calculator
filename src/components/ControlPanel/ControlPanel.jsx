import React from 'react';
import { useDispatch } from 'react-redux';
import { clear, clearAll, clearHistory, undo } from '../../store/slices/calculator';

const ControlPanel = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<button onClick={() => dispatch(undo())}>Undo</button>
			<button onClick={() => dispatch(clear())}>Clear</button>
			<button onClick={() => dispatch(clearHistory())}>Clear history</button>
			<button onClick={() => dispatch(clearAll())}>Clear All</button>
		</div>
	);
};

export default ControlPanel;
