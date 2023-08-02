export const setItemToLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItemFromLocalStorage = (key: string): string => {
  const existedLocalStorageValue = localStorage.getItem(key);

  if (existedLocalStorageValue) {
    return JSON.parse(existedLocalStorageValue) as string;
  }
  return '';
};
