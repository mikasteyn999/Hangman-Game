// Import all the hangman steps images
import state1 from '../assets/hangmanDrawings/state1.GIF';
import state2 from '../assets/hangmanDrawings/state2.GIF';
import state3 from '../assets/hangmanDrawings/state3.GIF';
import state4 from '../assets/hangmanDrawings/state4.GIF';
import state5 from '../assets/hangmanDrawings/state5.GIF';
import state6 from '../assets/hangmanDrawings/state6.GIF';
import state7 from '../assets/hangmanDrawings/state7.GIF';
import state8 from '../assets/hangmanDrawings/state8.GIF';
import state9 from '../assets/hangmanDrawings/state9.GIF';
import state10 from '../assets/hangmanDrawings/state10.GIF';
import state11 from '../assets/hangmanDrawings/state11.GIF';

const HangmanDisplay = ({ incorrectGuessCount }) => {
  // Store all the hangman images in an array
  const hangmanSteps = [state1, state2, state3, state4, state5, state6, state7, state8, state9, state10, state11];

  // Select the current hangman image based on the number of incorrect guesses
  const currentHangmanImage = hangmanSteps[incorrectGuessCount];

  return (
    <img src={currentHangmanImage} alt="Hangman Display" />
  );
}

export default HangmanDisplay;
