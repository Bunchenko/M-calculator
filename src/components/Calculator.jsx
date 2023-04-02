import Keypad from './Keypad';
import History from './History';

import Display from './Display';
import ControlPanel from './ControlPanel';

function Calculator() {
	return (
		<div className='Calculator'>
			<History />
			<ControlPanel />
			<Display />
			<Keypad />
		</div>
	);
}

export default Calculator;
