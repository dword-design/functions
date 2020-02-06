import { add } from '@dword-design/functions'

export default () => {
  expect(1 |> add(2)).toEqual(3)
  expect('foo' |> add('bar')).toEqual('foobar')
}
