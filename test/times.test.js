import { times } from '@dword-design/functions'

export default () => expect(times(4, x => x)).toEqual([0, 1, 2, 3])
