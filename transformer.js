const { importSchema } = require('graphql-import');

module.exports = {
  process(src) {
    return `module.exports = \`${importSchema(
      this.cacheable ? this.cacheable() : src,
    ).replace(/`/g, '\\`')}\``;
  },
};
