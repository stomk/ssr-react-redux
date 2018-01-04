import { FETCH_USERS } from '../actions';

export default (state = [], actions) => {
  switch(action.type) {
    case(FETCH_USERS):
      return action.payload.data;
    default:
      return state;
  }
};
