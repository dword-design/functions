import dropRight from 'lodash/dropRight.js';

export default (n = 1) =>
  array =>
    dropRight(array, n);
