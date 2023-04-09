import join from './join.js'

export default {
  valid: () => expect(['1', '2', '3'] |> join(',')).toEqual('1,2,3'),
}
