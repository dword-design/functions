import isEmpty from './is-empty.js';

export default {
  array: () => {
    expect([] |> isEmpty).toBeTruthy();
    expect([1] |> isEmpty).toBeFalsy();
  },
  number: () => {
    expect(0 |> isEmpty).toBeTruthy();
    expect(1 |> isEmpty).toBeTruthy();
  },
  object: () => {
    expect({} |> isEmpty).toBeTruthy();
    expect({ foo: 1 } |> isEmpty).toBeFalsy();
  },
  string: () => {
    expect('' |> isEmpty).toBeTruthy();
    expect('foo' |> isEmpty).toBeFalsy();
  },
  undefined: () => expect(undefined |> isEmpty).toBeTruthy(),
};
