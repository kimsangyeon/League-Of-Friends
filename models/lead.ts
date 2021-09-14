import { MatchScoreInfo } from "./match";

export interface LeadInfo {
  name: string;
  info: MatchScoreInfo;
}

export interface KillInfo {
  name: string;
  kills: number;
}

export interface DeathsInfo {
  name: string;
  deaths: number;
}

export interface AssistsInfo {
  name: string;
  assists: number;
}

export interface WinInfo {
  name: string;
  win: number;
}

export interface LoseInfo {
  name: string;
  lose: number;
}

export type LeadInfoList = KillInfo[] | DeathsInfo[] | AssistsInfo[] | WinInfo[] | LoseInfo[];
