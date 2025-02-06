/** @format */

 import {useState} from 'react';
import Display from "../Display/Display";
import DrumPad from "../DrumPad/DrumPad";
import { DRUM_PADS } from "../../utils/constants";
import "./DrumMachine.scss";

/**
 * Main container component for the Drum Machine
 * Manages the drum pad grid and display functionality
 * @returns {JSX.Element} DrumMachine component
 */
const DrumMachine = () => {
	const [displayText, setDisplayText] = useState('');

	const handlePadClick = ( soundName ) => {
		 setDisplayText(soundName)
	}
	
	
	return (
		<div id="drum-machine" data-testid="drum-machine" role="main" aria-label="Drum Machine">
			<Display text={displayText}/>
			<div className="pad-container" data-testid="pad-container">
				{DRUM_PADS?.map((pad) => (
					<DrumPad 
					key={pad.key} 
					pad={pad} 
					onPadClick={handlePadClick}
					/>
				))}
			</div>
		</div>
	);
};

DrumMachine.propTypes = {};
export default DrumMachine;
