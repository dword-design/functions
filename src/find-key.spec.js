import findKey from './find-key'

export default {
  true: () => expect({ foo: 1, bar: 2 } |> findKey(value => value === 1)).toEqual('foo'),
  false: () => expect({ foo: 1, bar: 2 } |> findKey(value => value === 3)).toBeUndefined(),
}
