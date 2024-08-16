import split from './split.js';

export default {
  valid: () => expect('1|2|3' |> split('|')).toEqual(['1', '2', '3']),
};
