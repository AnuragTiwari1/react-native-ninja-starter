// @flow
import { BOOKIE_LIST, LEAGUE_LIST } from './constants';

module.exports = {
  showBookiesByLeagueId: () => {
    return (dispatch: any) => {
      dispatch({
        type: BOOKIE_LIST,
        payload: '[{"bookie_id":"SBO"}}]',
      });
    };
  },
  getAllLeagues: () => {
    return (dispatch: any) => {
      dispatch({
        type: LEAGUE_LIST,
        payload: '[{"leagueId":2002106276}]',
      });
    };
  },
};
