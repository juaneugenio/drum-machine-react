/** @format */

import "./Display.scss";
import PropTypes from "prop-types";

function Display({ text }) {
	return (
		<div id="display" data-testid="display">
			{text}
		</div>
	);
}
Display.propTypes = {
	text: PropTypes.string.isRequired,
};
export default Display;
