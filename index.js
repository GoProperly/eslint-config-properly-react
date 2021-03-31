module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    '@goproperly/eslint-config-properly-base',
    'prettier/react',
    'plugin:testing-library/recommended',
  ],
  env: {
    browser: true,
  },
  rules: {
    // Don't want to rename all our files
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'jest/expect-expect': [
      'warn',
      {
        assertFunctionNames: ['expect', 'expectSaga'],
      },
    ],
    'testing-library/no-debug': 'warn',
  },
};
