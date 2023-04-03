import Keypad from '../Keypad/Keypad';
import History from '../History/History';

import Display from '../Display/Display';
import ControlPanel from '../ControlPanel/ControlPanel';

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
