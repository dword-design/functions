export default (name, value) => value !== undefined
  ? localStorage.setItem(name, value)
  : localStorage.removeItem(name)
