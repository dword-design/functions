export default param => typeof param === 'string' ? parseInt(param) : (str => parseInt(str, param))
