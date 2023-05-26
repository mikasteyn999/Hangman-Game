import React from 'react';
import '../style/HelpModal.css';

// HelpModal functional component
// Props: isHelpOpen (boolean), toggleHelpModal (function)
const HelpModal = ({ isHelpOpen, toggleHelpModal }) => {
  // If the HelpModal is not open, render nothing.
  if (!isHelpOpen) {
    return null;
  }
  // If the HelpModal is open, render the modal.
  return (
    // Container for the modal. Clicking on it will close the modal.
    <div className="help-modal-container" onClick={toggleHelpModal}>
      // Actual content of the modal. Uses stopPropagation to prevent clicks from reaching the container.
      <div className="help-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>How to Play</h2>
        <p>Your goal is to guess the word.</p>
        <p>Click on the letter images to guess a letter.</p>
        <p>If you guess correctly, the letter will be revealed in the word. If you guess wrong, the hangman picture will start to appear.</p>
        <p>If the hangman picture is fully revealed, you lose. If you reveal the whole word, you win.</p>
        <p>Good luck!</p>
        {/*Close button. Clicking it will close the modal. */}
        <button onClick={toggleHelpModal}>Close</button>
      </div>
    </div>
  );
}

// Export the HelpModal component for use in other files.
export default HelpModal;

