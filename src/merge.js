import merge from 'lodash/merge'

export default (...others) =>
  source =>
    merge(source, ...others)
