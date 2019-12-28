import drop from 'lodash/drop'

export default (n = 1) => array => drop(array, n)
