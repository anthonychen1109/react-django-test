import { POST_USER } from '../actions';

export default function(state=[], action){
  switch(action.type) {
    case(POST_USER):
      return[action.payload, ...state]
    default:
      return state;
  }
}
