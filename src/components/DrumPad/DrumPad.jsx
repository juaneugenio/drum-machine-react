/** @format */
import PropTypes from "prop-types";
import "./DrumPad.scss";
import useKeyPressDown from "../../hooks/useKeyPress";

const DrumPad = ({ pad, onPadClick }) => {
	const { key, id, audio } = pad;

	const handlePadTrigger = () => {
		const audioElement = document.getElementById(key);
		if (audioElement) {
			audioElement.currenTime = 0;
			audioElement.play();
			onPadClick(id);
		}
		
	};

	useKeyPressDown(key, handlePadTrigger);
	return (
		<div
			className="drum-pad"
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
