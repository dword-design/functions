import repeat from './repeat.js';

export default { valid: () => expect(1 |> repeat(3)).toEqual('111') };
