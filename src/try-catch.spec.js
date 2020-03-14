import tryCatch from './try-catch'
import identity from './identity'

export default {
  'no error': () => expect(1 |> tryCatch(identity, () => 2)).toEqual(1),
  error: () =>
    expect(1 |> tryCatch(() => { throw new Error('foo') }, ({ message }) => message)).toEqual('foo'),
  'async success': async () => expect(
    1
      |> tryCatch(
        () => new Promise(resolve => setTimeout(() => resolve('foo'), 100)),
        identity,
      )
      |> await,
  )
    .toEqual('foo'),
  'async error': async () => expect(
    1
      |> tryCatch(
        () => new Promise((resolve, reject) => setTimeout(() => reject('foo'), 100)),
        identity,
      )
      |> await,
  )
    .toEqual('foo'),
}
