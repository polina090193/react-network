const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@': 'src',
    '@c': 'src/components/'
  })(config);

  return config;
};
