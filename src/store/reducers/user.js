import { SET_TOKEN } from '../constants';

const initialState = {
  username: '',
  token: null,
};
function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    default:
      return state;
  }
}

export default userReducer;
