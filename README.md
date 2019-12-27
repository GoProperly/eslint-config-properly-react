# Properly ESLint React Config

An ESLint configuration for use by React web applications.

Built on top of [`eslint-config-properly-base`](https://github.com/GoProperly/eslint-config-properly-base) (which is in turn based on [`eslint-config-airbnb-base`](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/)).

Includes:
  - [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest), with its recommended config (via `eslint-config-properly-base`) 
  - [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
    - enables the optional [`airbnb/hooks`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-configairbnbhooks) config

## Installation

See https://github.com/GoProperly/template-web-app/pull/61/files for an example. Basically:
1. Make sure your project is [configured to use the GitHub Package Registry](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#installing-a-package)
1. Install this package:

    `npm install --save-dev @goproperly/eslint-config-properly-react`
1. Update your project's ESLint configuration to extend this base config:
    ```
    {
      "extends": ["@goproperly/eslint-config-properly-react"]
    }
    ```
