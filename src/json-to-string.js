export default (config = {}) =>
  object =>
    JSON.stringify(object, config.replacer, config.indent);
