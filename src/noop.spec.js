import noop from './noop.js';

export default { valid: () => expect(noop()).toBeUndefined() };
