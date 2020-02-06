import { negate } from '@dword-design/functions'

export default () => expect(negate(x => x === 1)(1)).toBeFalsy()
