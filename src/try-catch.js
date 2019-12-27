export default (tryer, catcher) => (...args) => {
  try {
    return tryer(...args)
  } catch (error) {
    return (catcher || (x => x))(error, ...args)
  }
}
