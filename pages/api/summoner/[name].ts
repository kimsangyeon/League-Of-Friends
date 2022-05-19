import type {NextApiRequest, NextApiResponse} from 'next'
import {apiGet} from '@utils/apiUtils';
import {SummonerInfoResponse} from '@models/summoner';
import {GET_SUMMONER_BY_NAME_URL} from '@consts/index';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {name} = req.query;
  try {
    const {data} = await apiGet<SummonerInfoResponse>(`${process.env.RIOT_API}${GET_SUMMONER_BY_NAME_URL}/${encodeURI(name as string)}`, {headers: {'X-Riot-Token': process.env.RIOT_KEY}});
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
  }
}
