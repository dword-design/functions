import { nullary } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(nullary(x => x)(1)).toBeUndefined()
