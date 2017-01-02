import { NEW_GAME } from '../actions/types';

function getRand() {
  return Math.ceil(Math.random() * 100);
}

export default function(state = getRand(), action) {
  switch (action.type) {
    case NEW_GAME:
      return getRand();
  }
  return state;
}
