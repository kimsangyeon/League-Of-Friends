export const GET_SUMMONER_BY_NAME_URL = '/lol/summoner/v4/summoners/by-name';
export const GET_SUMMONER_RANK_BY_ID_URL = '/lol/league/v4/entries/by-summoner';
export const GET_MATCH_ID_LIST_BY_PUUID = '/lol/match/v5/matches/by-puuid';
export const GET_MATCH_BY_MATCHID = '/lol/match/v5/matches';

export const PROFILE_ICON_URL = 'http://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon';

export const RIOT_KEY = 'RGAPI-5e27f8e5-2fd7-4ffe-9576-622a0826b9fc';

export const RANK_TO_MAP: {[key: string]: string} = {
  'RANKED_SOLO_5x5': '솔로랭크',
  'RANKED_FLEX_SR': '자유 5:5 랭크'
};