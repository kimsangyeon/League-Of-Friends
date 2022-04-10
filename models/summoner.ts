import { ApiResponse } from './api';

export interface SummonerInfo {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
}

export interface SummonerInfoResponse extends ApiResponse {
  data: SummonerInfo[];
}

export interface RankInfo {
  freshBlood: boolean;
  hotStreak: boolean;
  inactive: boolean;
  leagueId: string;
  leaguePoints: number;
  losses: number
  queueType: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  tier: string;
  veteran: boolean;
}

export interface RankInfoResponse extends ApiResponse {
  data: RankInfo;
}