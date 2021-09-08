import { checkExistSummoner } from "@hooks/summoner";
import { getLocalStorageByNameList, setLocalStorageByNameList } from "@utils/storageUtils";
import { MouseEvent, useState } from "react";
import { useQueryClient } from "react-query";

const RegisterSummoner = () => {
  const queryClient = useQueryClient();
  const [summonerName, setSummonerName] = useState('');

  const onRegister = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (await checkExistSummoner(summonerName)) {
      setLocalStorageByNameList(summonerName);
      setSummonerName('');
      queryClient.setQueryData('summonerList', () => getLocalStorageByNameList());
    }
  };

  return (
    <div>
      <input value={summonerName} onChange={(e) => setSummonerName(e.target.value)} />
      <button onClick={onRegister}>추가</button>
    </div>
  )
};

export default RegisterSummoner;
