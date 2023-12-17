const getInitialState = <T>(name: string, state: T): T => {
  const stateFromStorage = localStorage.getItem(name);

  if (stateFromStorage) {
    return JSON.parse(stateFromStorage) as T;
  }

  return state;
};

export default getInitialState;
