export default name => {
  const item = localStorage.getItem(name);
  return item === null ? undefined : item;
};
