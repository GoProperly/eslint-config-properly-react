module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    '@goproperly/eslint-config-properly-base',
    'prettier/react',
  ],
  env: {
    browser: true,
  },
  rules: {
    // Don't want to rename all our files
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
};
