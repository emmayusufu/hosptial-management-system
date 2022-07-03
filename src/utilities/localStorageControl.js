const getItem = (key) => {
  const data = typeof window !== 'undefined' ? localStorage.getItem(key) : '';
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

const setItem = (key, value) => {
  const stringify = typeof value !== 'string' ? JSON.stringify(value) : value;
  localStorage.setItem(key, stringify);
  window.dispatchEvent(new Event('storage'));
};

const removeItem = (key) => {
  localStorage.removeItem(key);
  window.dispatchEvent(new Event('storage'));
};

export { getItem, setItem, removeItem };
