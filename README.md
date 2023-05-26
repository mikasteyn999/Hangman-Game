# Hangman Game

Hangman is a classic word guessing game. This app is a version of the game that you can play in your web browser.

## Game Rules

1. The game chooses a random word, and you need to guess it. The word is represented by a row of dashes, giving the number of letters.
2. You guess one letter at a time. If the guessed letter is in the word, it replaces the dash(es) in the corresponding position(s) of the word.
3. If the guessed letter is not in the word, a part of the hangman is drawn. You have up to 10 incorrect guesses before the hangman is complete, and the game is lost.
4. The game continues until you either guess the word (win) or the hangman is fully drawn (lose).

## Installation

To install and run this app on your local machine, follow these steps:

### Prerequisites

Make sure you have Node.js and npm installed on your machine. If not, you can download and install them from [here](https://nodejs.org/en/download/).

### Steps

1. Clone this repository to your local machine using `https://github.com/mikasteyn999/hangman.git`. You can do this by opening your terminal and typing: 

    git clone https://github.com/mikasteyn999/hangman.git

2. Navigate into the cloned repository. In your terminal, type: 

    cd hangman

3. Install the dependencies. In your terminal, type: 

    npm install

4. Start the application. It will be available at `http://localhost:3000` in your browser. You can start the application by typing: 

    npm start

## Tech Stack

This application was built using the following technologies:

- React.js
- JavaScript
- CSS
