import merge from 'lodash/merge.js';

export default (...others) =>
  source =>
    merge(source, ...others);
