import dropRight from 'lodash/dropRight'

export default (n = 1) => array => dropRight(array, n)
