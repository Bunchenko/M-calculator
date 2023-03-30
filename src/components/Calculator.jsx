import { useDispatch } from 'react-redux';
import Keypad from './Keypad';
import History from './History';

import { setCurrentOperand } from '../store/slices/calculator';
import Display from './Display';
import ControlPanel from './ControlPanel';

function Calculator() {
	const dispatch = useDispatch();

	const handleClick = (value) => {
		dispatch(setCurrentOperand(value));
	};

	return (
		<div className='Calculator'>
			<History />
			<ControlPanel />
			<Display />
			<Keypad handleButtonClick={handleClick} />
		</div>
	);
}

export default Calculator;
