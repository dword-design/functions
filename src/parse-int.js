export default param =>
  typeof param === 'string' ? parseInt(param, 10) : str => parseInt(str, param)
