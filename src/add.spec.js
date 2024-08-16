import add from './add.js';

export default {
  valid: () => {
    expect(1 |> add(2)).toEqual(3);
    expect('foo' |> add('bar')).toEqual('foobar');
  },
};
