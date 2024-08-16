import stubObject from './stub-object.js';

export default { valid: () => expect(stubObject()).toEqual({}) };
