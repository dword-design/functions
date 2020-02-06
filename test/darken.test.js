import { darken } from '@dword-design/functions'

export default () => expect(darken('#ff0000', .5)).toEqual('#fc0000')
