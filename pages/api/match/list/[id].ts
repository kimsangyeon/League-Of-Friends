import type {NextApiRequest, NextApiResponse} from 'next'
import {apiGet} from '@utils/apiUtils';
import {GET_MATCH_ID_LIST_BY_PUUID, GET_MATCH_BY_MATCHID} from '@consts/index';
import {MatchIdList, MatchResponse} from '@models/match';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {id} = req.query;
  try {
    const matchIdList = await apiGet<MatchIdList>(`${process.env.RIOT_ASIA_API}${GET_MATCH_ID_LIST_BY_PUUID}/${encodeURI(id as string)}/ids?start=0&count=5`, {headers: {'X-Riot-Token': process.env.RIOT_KEY}});
    const matchList = matchIdList?.data.map(
      async (matchId: string) => await apiGet<MatchResponse>(`${process.env.RIOT_ASIA_API}${GET_MATCH_BY_MATCHID}/${matchId}`)
    );

    Promise.all(matchList).then(values => {
      res.status(200).json(values?.map(v => v?.data));
    });
  } catch (e) {
    console.error('e');
  }
}
