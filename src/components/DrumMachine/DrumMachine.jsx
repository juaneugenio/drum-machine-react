/** @format */

import Display from "../Display/Display";
import DrumPad from "../DrumPad/DrumPad";
import { DRUM_PADS } from "../../utils/constants";

/**
 * Main container component for the Drum Machine
 * Manages the drum pad grid and display functionality
 * @returns {JSX.Element} DrumMachine component
 */
const DrumMachine = () => {
	return (
		<div id="drum-machine" data-testid="drum-machine" role="main" aria-label="Drum Machine">
			<Display />
			<div className="pad-container">
				{DRUM_PADS?.map((pad) => (
					// {console.log('👉 L-19 ▶︎▶︎', pad);}
					<DrumPad key={pad.key} pad={pad} />
				))}
			</div>
		</div>
	);
};

DrumMachine.propTypes = {};
export default DrumMachine;
