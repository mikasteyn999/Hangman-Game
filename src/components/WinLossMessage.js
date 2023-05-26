import React from 'react';

// The component takes two props: gameStatus, currentWord.
const WinLossMessage = ({ gameStatus, currentWord }) => {
  // Depending on the gameStatus, the component returns different content.
  if (gameStatus === 'won') {
    return (
      <div>
        <h2>Congratulations, you won!</h2>
      </div>
    );
  } else if (gameStatus === 'lost') {
    return (
      <div>
        <h2>Sorry, you lost. The word was {currentWord}.</h2>
      </div>
    );
  } else {
    return null;
  }
}

export default WinLossMessage;
