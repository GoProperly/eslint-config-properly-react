module.exports = {
  extends: [
    '@goproperly/eslint-config-properly-base',
    'airbnb',
    'airbnb/hooks',
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
