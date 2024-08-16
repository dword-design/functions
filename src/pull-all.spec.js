import pullAll from './pull-all.js';

export default {
  valid: () => {
    const array = ['foo', 'bar', 'baz', 'next'];
    expect(array |> pullAll(['bar', 'baz'])).toEqual(['foo', 'next']);
    expect(array).toEqual(['foo', 'bar', 'baz', 'next']);
  },
};
