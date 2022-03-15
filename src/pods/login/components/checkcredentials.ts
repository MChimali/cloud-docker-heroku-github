export const checkCredentials = (name: string, pass: string, list: any[]) => {
  const element = list.find(
    ({ username, password }) => username === name && password === pass
  );
  return element ? true : false;
};
