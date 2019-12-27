export default ({ replacer, indent } = {}) => object =>
  JSON.stringify(object, replacer, indent)
