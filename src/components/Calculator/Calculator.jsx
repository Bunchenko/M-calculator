import Keypad from '../Keypad/Keypad';
import History from '../History/History';

import Display from '../Display/Display';
import ControlPanel from '../ControlPanel/ControlPanel';
import ErrorBoundary from '../ErrorBoundary';

function Calculator() {
	return (
		<div>
			<ErrorBoundary>
				<History />
				<ControlPanel />
				<Display />
				<Keypad />
			</ErrorBoundary>
		</div>
	);
}

export default Calculator;
