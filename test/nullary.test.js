import { nullary } from '@dword-design/functions'

export default () => expect(nullary(x => x)(1)).toBeUndefined()
