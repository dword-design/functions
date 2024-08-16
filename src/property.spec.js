import property from './property.js';

export default {
  valid: () => expect({ foo: { bar: 1 } } |> property('foo.bar')).toEqual(1),
};
