import pull from './pull.js';

export default {
  valid: () =>
    expect(['foo', 'bar', 'baz'] |> pull('bar')).toEqual(['foo', 'baz']),
};
