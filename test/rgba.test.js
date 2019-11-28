import { rgba } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(rgba('#ff0000', .5)).toEqual('rgba(255, 0, 0, 0.5)')
