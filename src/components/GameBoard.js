import React from 'react';

// The GameBoard displays the current word as a series of tiles
const GameBoard = ({ currentWord, guessedLetters }) => {
    return (
      <div className="game-board">
        {currentWord.split('').map((letter, index) => (
          <span key={index} className="letter">
            {guessedLetters.includes(letter) ? letter : '_'}
          </span>
        ))}
      </div>
    );
  }
  
  export default GameBoard;