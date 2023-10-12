
function UseLocalStorage(key: string) {
  const getFromLocalStorage = () => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [null];
  };

  const saveToLocalStorage = (data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const removeFromLocalStorage = () => {
    localStorage.removeItem(key);
  };

  return {
    getFromLocalStorage,
    saveToLocalStorage,
    removeFromLocalStorage,
  };
}

export default UseLocalStorage;
