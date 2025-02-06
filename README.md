src/
  components/
    DrumMachine/          # Main container (User Story #1)
      index.jsx           # Main component
      DrumMachine.scss    # Styles
      DrumMachine.test.jsx# Tests
    Display/              # Display component (User Story #2)
      index.jsx
      Display.scss
      Display.test.jsx
    DrumPad/             # Drum pad component (User Stories #3-6)
      index.jsx
      DrumPad.scss
      DrumPad.test.jsx
  hooks/
    useKeyPress.js       # For keyboard events (User Story #6)
  utils/
    constants.js    # For pad configurations and audio mappings