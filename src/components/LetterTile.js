import React from 'react';

// Each LetterTile represents a single letter in the current word
function LetterTile({ letter, isGuessed }) {
  // If the letter has been guessed, we'll display it, otherwise we'll display a placeholder
  return <div>{isGuessed ? letter : '_'}</div>;
}

export default LetterTile;
