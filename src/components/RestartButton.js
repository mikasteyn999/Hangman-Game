import React from 'react';

// The RestartButton allows the user to start a new game
function RestartButton({ handleRestart }) {
  // For now, we just display a button
  return <button className="restart-button" onClick={handleRestart}>Restart Game</button>;
}

export default RestartButton;
