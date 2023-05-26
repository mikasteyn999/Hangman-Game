// Import React from 'react' library
import React from 'react';

// Functional component LetterGrid that takes in props of guessedLetters and handleLetterClick
const LetterGrid = ({ guessedLetters, handleLetterClick }) => {
  // Splitting the string of alphabets into individual letters
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // Return a div element containing a grid of all the alphabets
  return (
    <div className="alphabet-grid">
      {/* Map through all the letters of alphabet and display an img for each */}
      {alphabet.map(letter => (
        <img 
          key={letter}  // unique key prop is necessary for all elements returned in map
          // Display a different img based on whether the letter has been guessed or not
          src={`/assets/alphabet/${guessedLetters.includes(letter) ? `${letter}Guessed.png` : `${letter}.png`}`}
          alt={letter}  // alt prop for accessibility 
          onClick={() => handleLetterClick(letter)}  // When a letter img is clicked, handleLetterClick function is called
        />
      ))}
    </div>
  );
}
// Export the LetterGrid component
export default LetterGrid;

