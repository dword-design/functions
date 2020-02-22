import repeat from './repeat'

export default {
  valid: () => expect(1 |> repeat(3)).toEqual('111'),
}
