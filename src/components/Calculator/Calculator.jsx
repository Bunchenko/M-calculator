import Keypad from '../Keypad/Keypad';
import History from '../History/History';

import Display from '../Display/Display';
import ControlPanel from '../ControlPanel/ControlPanel';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { CalculatorWrapper } from './styled';

function Calculator() {
	return (
		<CalculatorWrapper>
			<ErrorBoundary>
				<History />
				<ControlPanel />
				<Display />
				<Keypad />
			</ErrorBoundary>
		</CalculatorWrapper>
	);
}

export default Calculator;
