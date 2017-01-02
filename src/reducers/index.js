import { combineReducers } from 'redux';
import submitGuess from './submitGuess';
import newGame from './new_game';

const initialState = {
  number: 0,
  guesses: []
}

const rootReducer = combineReducers({
  number: newGame,
  guesses: submitGuess
});



export default rootReducer;
