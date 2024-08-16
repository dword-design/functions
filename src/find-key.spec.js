import findKey from './find-key.js';

export default {
  false: () =>
    expect({ bar: 2, foo: 1 } |> findKey(value => value === 3)).toBeUndefined(),
  true: () =>
    expect({ bar: 2, foo: 1 } |> findKey(value => value === 1)).toEqual('foo'),
};
