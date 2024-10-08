export default (cond, thenFunc, elseFunc = x => x) =>
  (...args) =>
    cond(...args) ? thenFunc(...args) : elseFunc(...args);
