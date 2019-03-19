// @flow
import { BOOKIE_LIST, LEAGUE_LIST } from './constants';

module.exports = {
  showBookiesByLeagueId: () => {
    return (dispatch: any) => {
      dispatch({
        type: BOOKIE_LIST,
        payload:
          '[{"bookie_id":"SBO"},{"bookie_id":"SIN"},{"bookie_id":"IBC"},{"bookie_id":"PIN"},{"bookie_id":"ISN"}]',
      });
    };
  },
  getAllLeagues: () => {
    return (dispatch: any) => {
      dispatch({
        type: LEAGUE_LIST,
        payload:
          '[{"leagueId":2002106276,"leagueName":"IRAN AZADEGAN LEAGUE"},{"leagueId":1822551392,"leagueName":"INDIA I-LEAGUE"},{"leagueId":1164659976,"leagueName":"ARGENTINA RESERVE LEAGUE"},{"leagueId":1171522574,"leagueName":"CZECH REPUBLIC LEAGUE U21"},{"leagueId":1414743985,"leagueName":"DENMARK RESERVE LEAGUE"},{"leagueId":1174569629,"leagueName":"INTERNATIONAL FRIENDLY"},{"leagueId":-1517274605,"leagueName":"CZECH REPUBLIC LEAGUE U21 - NO. OF CORNERS"},{"leagueId":-1198492510,"leagueName":"SAUDI PREMIER LEAGUE U19"},{"leagueId":2022010009,"leagueName":"ISRAEL LIGA ALEF"},{"leagueId":-1303697715,"leagueName":"ENGLISH PROFESSIONAL DEVELOPMENT LEAGUE U23"},{"leagueId":292710343,"leagueName":"HOLLAND RESERVE LEAGUE"},{"leagueId":1812961206,"leagueName":"INTERNATIONAL FRIENDLY U17"},{"leagueId":-142325700,"leagueName":"EUROLEAGUE WOMEN"},{"leagueId":1596159936,"leagueName":"EUROPE BASKETBALL CHAMPIONS LEAGUE"},{"leagueId":-836553610,"leagueName":"SWEDEN BASKETBALL LEAGUE"}]',
      });
    };
  },
};
