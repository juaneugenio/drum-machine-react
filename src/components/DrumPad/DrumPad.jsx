/** @format */
import PropTypes from "prop-types";

const DrumPad = ({ pad }) => {
	const { key, id, audio } = pad;

	return (
		<div
			className="drum-pad"
			id={id}
			data-testid={`drum-pad-${key}`}
			role="button"
			tabIndex={0}
			aria-label={`Drum pad ${key}`}
		>
			<audio 
      className="clip" 
      id={key} 
      src={`/src/assets/sounds/${audio}`} 
      role="audio" />
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
};

export default DrumPad;