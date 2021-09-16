import { fetchRank, fetchSummoner } from "@hooks/summoner";
import { RankInfo } from "@models/summoner";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";

interface DetailPageProps {
  rank: RankInfo[];
}

const DetailPage = ({rank}: DetailPageProps) => {
  const router = useRouter();
  const {name} = router.query;

  return (
    <div>
      <div>detail: {name}</div>
      <div>rank: {rank[0]?.rank}</div>
      <div>tier: {rank[0]?.tier}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {query} = ctx;

  const summoner = await fetchSummoner(encodeURI(query?.name as string || ''), true);
  const rank = await fetchRank((summoner?.data?.id as string|| ''), true);

  return {
    props: {
      rank: rank.data
    }
  };
}

export default DetailPage;
