export const getLocalStorageMyName = () => {
  return localStorage.getItem('myName') || '';
};

export const setLocalStorageMyName = (myName: string) => {
  return localStorage.setItem('myName', myName);
};
