import Display from "../Display/Display"

/**
 * Main container component for the Drum Machine
 * Manages the drum pad grid and display functionality
 * @returns {JSX.Element} DrumMachine component
 */
const DrumMachine = () => {
  return (
    <div 
    id="drum-machine" 
    data-testid="drum-machine"
    role="main"
    aria-label="Drum Machine"
    >
      <Display/>
    </div>
  )
}

DrumMachine.propTypes={}
export default DrumMachine