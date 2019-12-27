import { overEvery } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect(overEvery(x => x === 1)(1)).toBeTruthy()
  expect(overEvery(x => x === 2)(1)).toBeFalsy()
  expect(overEvery(x => x >= 1, x => x >= 0)(1)).toBeTruthy()
  expect(overEvery(x => x >= 1, x => x >= 0)(0)).toBeFalsy()
}
