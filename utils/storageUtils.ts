export const getLocalStorageByNameList = (): string[] => {
  return localStorage.getItem('nameList')?.split(',') || [];
};

export const setLocalStorageByNameList = (name: string) => {
  const nameList = localStorage.getItem('nameList')?.split(',') || [];

  if (nameList.length === 10) {
    alert('소환사는 5명까지 등록 가능합니다.');
    return;
  }

  if (nameList.find((n) => n === name)) {
    alert('이미 등록된 소환사입니다.');
    return;
  }

  nameList.push(name);
  localStorage.setItem('nameList', nameList.toString());
};

export const removeLocalStorageByNameList = (name: string) => {
  const nameList = localStorage.getItem('nameList')?.split(',').filter(n => n !== name) || [];
  if (nameList.length === 0) localStorage.removeItem('nameList');
  else localStorage.setItem('nameList', nameList.toString());
};
