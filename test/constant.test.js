import { constant } from '@dword-design/functions'

export default () => expect(constant(1)()).toEqual(1)
