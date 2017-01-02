import { NEW_GAME, SUBMIT_GUESS } from './types';

function newGame() {
  return {
    type: NEW_GAME
  };
}

function submitGuess(number) {
  return {
    number,
    type: SUBMIT_GUESS
  };
}

module.exports = { newGame, submitGuess };
