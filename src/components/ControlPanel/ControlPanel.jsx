import React from 'react';
import { useDispatch } from 'react-redux';
import { clear, clearAll, clearHistory, undo } from '../../store';
import Button from '../Button/Button';

const ControlPanel = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<Button onClick={() => dispatch(undo())} data-cy='undo'>
				Undo
			</Button>
			<Button onClick={() => dispatch(clear())} data-cy='clear'>
				Clear
			</Button>
			<Button onClick={() => dispatch(clearHistory())} data-cy='clear-history'>
				Clear history
			</Button>
			<Button onClick={() => dispatch(clearAll())} data-cy='clear-all'>
				Clear All
			</Button>
		</div>
	);
};

export default ControlPanel;
