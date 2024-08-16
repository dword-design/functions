import pullAt from './pull-at.js';

export default {
  valid: () => {
    const array = ['foo', 'bar', 'baz'];
    expect(array |> pullAt(1)).toEqual(['foo', 'baz']);
    expect(array).toEqual(['foo', 'bar', 'baz']);
  },
};
