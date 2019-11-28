import { last } from '@dword-design/functions'
import expect from 'expect'

export default () => expect([] |> last).toBeUndefined()
