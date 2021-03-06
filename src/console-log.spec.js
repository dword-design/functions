import mockStdio from 'mock-stdio'

import consoleLog from './console-log'

export default {
  valid: () => {
    mockStdio.start()

    const result = 'foo' |> consoleLog |> x => `${x}bar`
    expect(result).toEqual('foobar')

    const output = mockStdio.end()
    expect(output.stdout).toEqual('foo\n')
  },
}
