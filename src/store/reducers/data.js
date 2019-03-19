import {
  BOOKIE_LIST,
  LEAGUE_LIST,
  SNACK,
  SUBSCRIPTION,
  UNSUBSCRIBE,
} from '../constants';

const initialState = {
  leagueList: [],
  bookieList: [],
  snackContent: false,
  subscriptionList: [],
};
function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LEAGUE_LIST:
      return {
        ...state,
        leagueList: JSON.parse(payload),
      };
    case BOOKIE_LIST:
      return {
        ...state,
        bookieList: JSON.parse(payload),
      };
    case SNACK:
      return {
        ...state,
        snackContent: payload,
      };
    case SUBSCRIPTION:
      return {
        ...state,
        subscriptionList: payload.slice(0).reverse(),
      };
    case UNSUBSCRIBE:
      return {
        ...state,
        subscriptionList: state.subscriptionList.filter(
          ele => ele.id !== payload
        ),
      };
    default:
      return state;
  }
}

export default userReducer;
