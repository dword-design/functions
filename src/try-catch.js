import pIsPromise from 'p-is-promise'
import identity from './identity'

export default (tryer, catcher = identity) => (...args) => {
  try {
    const result = tryer(...args)
    if (result |> pIsPromise) {
      return result.catch(error => catcher(error, ...args))
    }
    return result
  } catch (error) {
    return catcher(error, ...args)
  }
}
