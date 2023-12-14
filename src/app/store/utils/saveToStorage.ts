const saveToStorage = <T>(key: string, state: T & object): { get: () => T, delete: () => void } => {
  localStorage.setItem(key, JSON.stringify(state));

  return {
    get: () => JSON.parse(localStorage.getItem(key) as string),
    delete: () => localStorage.removeItem(key)
  };
};

export default saveToStorage;
