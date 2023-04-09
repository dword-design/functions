import invokeArgs from './invoke-args.js'

export default {
  valid: () =>
    expect({ func: x => x * 2 } |> invokeArgs('func', [2])).toEqual(4),
}
