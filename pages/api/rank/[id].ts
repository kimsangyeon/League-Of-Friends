import type {NextApiRequest, NextApiResponse} from 'next'
import {apiGet} from '@utils/apiUtils';
import {RankInfoResponse} from '@models/summoner';
import {GET_SUMMONER_RANK_BY_ID_URL} from '@consts/index';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {id} = req.query;
  try {
    const {data} = await apiGet<RankInfoResponse>(`${process.env.RIOT_API}${GET_SUMMONER_RANK_BY_ID_URL}/${encodeURI(id as string)}`, {headers: {'X-Riot-Token': process.env.RIOT_KEY}});
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
  } finally {
    res.end();
  }
}
