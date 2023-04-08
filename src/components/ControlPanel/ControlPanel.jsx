import React from 'react';
import { useDispatch } from 'react-redux';
import { clear, clearAll, clearHistory, undo } from '../../store/slices/calculator';
import Button from '../Button/Button';

const ControlPanel = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<Button onClick={() => dispatch(undo())}>Undo</Button>
			<Button onClick={() => dispatch(clear())}>Clear</Button>
			<Button onClick={() => dispatch(clearHistory())}>Clear history</Button>
			<Button onClick={() => dispatch(clearAll())}>Clear All</Button>
		</div>
	);
};

export default ControlPanel;
