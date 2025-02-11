/** @format */

import "./Display.scss";
import PropTypes from "prop-types";

function Display({ text }) {
	return (
		<>
			<div className="display-header">
				<h1>Drum Machine</h1>
				<details 
					className="info-details" 
					aria-label="Instructions"
					role="group"
				>
					<summary aria-controls="instructions-content" aria-expanded="false">
						How to play?
					</summary>
					<div 
						id="instructions-content" 
						className="content"
						role="region"
						aria-label="Game instructions"
					>
						<p>Use mouse clicks or keyboard keys (Q,W,E,A,S,D,Z,X,C) to play</p>
					</div>
				</details>
			</div>
			<div 
				id="display" 
				data-testid="display" 
				role="status" 
				aria-live="polite"
			>
				{text}
			</div>
		</>
	);
}
Display.propTypes = {
	text: PropTypes.string.isRequired,
};
export default Display;
