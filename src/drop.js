import drop from 'lodash/drop.js';

export default (n = 1) =>
  array =>
    drop(array, n);
