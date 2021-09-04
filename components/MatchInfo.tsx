import { useMatchIdList, useMatchList } from "@hooks/match";

interface MatchInfoProps {
  puuid: string;
}

const MatchInfo = ({puuid}: MatchInfoProps) => {
  const { matchIdList, isMatchIdListLoading, isMatchIdListFetching } = useMatchIdList(puuid);
  const { matchList, isMatchListLoading, isMatchListFetching } = useMatchList(matchIdList);

  return (
    <div>

    </div>
  );
};

export default MatchInfo;
