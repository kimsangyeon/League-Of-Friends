export const getDaysAgo = (date: Date) => {
  const today = new Date();
  const betweenTime = Math.floor(
    (today.getTime() - date.getTime()) / 1000 / 60
  );
  if (betweenTime < 1) return '방금전';
  if (betweenTime < 60) {
    return `${betweenTime}분 전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간 전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일 전`;
  }
};

export const formatYYYYMMDD = (time: number) => {
  const date = new Date(time);
  const yyyy = `${date.getFullYear()}`.slice(2);
  const mm =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const dd = date.getDate();

  return `${yyyy}.${mm}.${dd}`;
};
