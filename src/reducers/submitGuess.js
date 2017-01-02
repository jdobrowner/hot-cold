import { SUBMIT_GUESS, NEW_GAME } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SUBMIT_GUESS:
      return [ ...state, action.number];
    case NEW_GAME:
      return [];
  }
  return state;
}
