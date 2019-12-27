import { consoleLog } from '@dword-design/functions'
import expect from 'expect'
import mockStdio from 'mock-stdio'

export default () => {
  mockStdio.start()
  const result = 'foo'
    |> consoleLog
    |> x => `${x}bar`
  expect(result).toEqual('foobar')
  const { stdout } = mockStdio.end()
  expect(stdout).toEqual('foo\n')
}
