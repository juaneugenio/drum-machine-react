/** @format */
import PropTypes from "prop-types";
import { useState } from "react";
import "./DrumPad.scss";
import useKeyPressDown from "../../hooks/useKeyPress";

const DrumPad = ({ pad, onPadClick }) => {
	const [isActive, setIsActive] = useState(false);
	const { key, id, audio } = pad;

	const handlePadTrigger = () => {
		setIsActive(true);
		const audioElement = document.getElementById(key);
		if (audioElement) {
			audioElement.currentTime = 0;
			audioElement.play();
			onPadClick(id);
		}
		setTimeout(() => setIsActive(false), 100);
	};

	useKeyPressDown(key, handlePadTrigger);
	return (
		<div
			className={`drum-pad ${isActive ? "active" : ""}`}
			id={id}
			data-testid={`drum-pad-${key}`}
			role="button"
			tabIndex={0}
			aria-label={`Drum pad ${key}`}
			onClick={handlePadTrigger}
		>
			<audio className="clip" id={key} src={`/src/assets/sounds/${audio}`} role="audio" />
			{key}
		</div>
	);
};

DrumPad.propTypes = {
	pad: PropTypes.shape({
		key: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		audio: PropTypes.string.isRequired,
	}).isRequired,
	onPadClick: PropTypes.func.isRequired,
};

export default DrumPad;
