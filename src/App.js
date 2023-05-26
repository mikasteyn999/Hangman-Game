// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import HangmanDisplay from './components/HangmanDisplay';
import WinLossMessage from './components/WinLossMessage';
import HelpModal from './components/HelpModal';
import RestartButton from './components/RestartButton';
import LetterGrid from './components/LetterGrid';


// Main application component
function App() {
  // Initialize states using useState hook
  const [currentWord, setCurrentWord] = useState(""); 
  const [guessedLetters, setGuessedLetters] = useState([]); 
  const [gameStatus, setGameStatus] = useState(""); 
  const [incorrectGuesses, setIncorrectGuesses] = useState(0); 
  const [isHelpOpen, setIsHelpOpen] = useState(false); 

  // Function to return a random word from the passed array
  const getRandomWord = (words) => {
    return words[Math.floor(Math.random() * words.length)];
  }

  // useEffect hook to set game status based on current word, guessed letters and incorrect guesses
  useEffect(() => {
    if (incorrectGuesses > 9) {
      setGameStatus('lost');
    }
    else if (currentWord.split('').every(letter => guessedLetters.includes(letter))) {
      setGameStatus('won');
    }
    else {
      setGameStatus('');
    }
  }, [currentWord, guessedLetters, incorrectGuesses]);
  
  // Restart function to reset the game states and fetch a new word
  const handleRestart = () => {
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameStatus('');
  
    fetch('/assets/text/dictionary.txt')
      .then(response => response.text())
      .then(text => {
        const words = text.split('\n').map(word => word.trim());
        const reasonableWords = words.filter(word => word.length <= 7);
        setCurrentWord(getRandomWord(reasonableWords));
      });
  };
  
  // useEffect to fetch a word from dictionary.txt when the component mounts
  useEffect(() => {
    fetch('/assets/text/dictionary.txt')
      .then(response => response.text())
      .then(text => {
        const words = text.split('\n').map(word => word.trim());
        const reasonableWords = words.filter(word => word.length <= 7);
        setCurrentWord(getRandomWord(reasonableWords));
      });
  }, []);

  // Function to handle letter click event
  const handleLetterClick = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);
      if (!currentWord.includes(letter)) {
        setIncorrectGuesses((prev) => prev + 1);
      }
    }
  };

  // Function to toggle help modal
  const toggleHelpModal = () => {
    setIsHelpOpen(prev => !prev);
  } 

  // Render components
  return (
    <div className="App">
      <GameBoard currentWord={currentWord} guessedLetters={guessedLetters} />
      <HangmanDisplay incorrectGuessCount={incorrectGuesses} />
      <WinLossMessage gameStatus={gameStatus} currentWord={currentWord} />
      <LetterGrid guessedLetters={guessedLetters} handleLetterClick={handleLetterClick} />
      <HelpModal isHelpOpen={isHelpOpen} toggleHelpModal={toggleHelpModal} />
      <button onClick={toggleHelpModal}>Help</button>
      <RestartButton handleRestart={handleRestart} />
    </div>
  );
}

// Export the App component
export default App;
