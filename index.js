module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    '@goproperly/eslint-config-properly-base',
  ],
  env: {
    browser: true,
  },
  rules: {
    // Don't want to rename all our files
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/no-unstable-nested-components': 'error',
    'jest/expect-expect': [
      'warn',
      {
        assertFunctionNames: ['expect', 'expectSaga'],
      },
    ],
    // Prefer arrow function definition style over others
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // Allow fragments if they have strings in them, e.g. <>{title</>. Valuable for TypeScript.
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    // We're fine with prop spreading
    'react/jsx-props-no-spreading': 'off',
  },
  overrides: [
    {
      // Enable testing-library/react but only for test files
      files: ['**/*.test.[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
