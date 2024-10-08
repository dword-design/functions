export default (name, value) =>
  value === undefined
    ? localStorage.removeItem(name)
    : localStorage.setItem(name, value);
