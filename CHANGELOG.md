## [2.14.0](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.13.3...v2.14.0) (2023-07-11)


### Features

* update prettier to v3 ([e7c94a9](https://github.com/GoProperly/eslint-config-properly-react/commit/e7c94a9148f69a9eacfc07d37bb53d2e7b269f12))

## [2.13.3](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.13.2...v2.13.3) (2023-05-11)


### Bug Fixes

* base config was being overwritten by prettier ([33bf016](https://github.com/GoProperly/eslint-config-properly-react/commit/33bf0165e1d21a0a00d88ab15b8cc8f9ee617d7b))

## [2.13.2](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.13.1...v2.13.2) (2023-04-26)


### Bug Fixes

* update base linting ruleset and use Node 18 ([76cd096](https://github.com/GoProperly/eslint-config-properly-react/commit/76cd09633f1617b1b540e6b197e90adf2f4a8070))

## [2.13.1](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.13.0...v2.13.1) (2023-04-26)


### Bug Fixes

* **.npmrc:** remove engine strict true from npmrc ([02d378f](https://github.com/GoProperly/eslint-config-properly-react/commit/02d378f5e9e2e88c68438d79a439e9c705854a94))

## [2.13.0](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.12.0...v2.13.0) (2023-03-31)


### Features

* update eslint to v8 and jest support to v29 ([4f56c98](https://github.com/GoProperly/eslint-config-properly-react/commit/4f56c9830025dcd27689458da637582c77cfde95))

## [2.12.0](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.11.1...v2.12.0) (2023-02-24)


### Features

* disable jsx-props-no-spreading rule, we are okay with spreading props ([c2d66d7](https://github.com/GoProperly/eslint-config-properly-react/commit/c2d66d7809324c72045441dc7ed36e34f5a28382))

## [2.11.1](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.11.0...v2.11.1) (2023-02-23)


### Bug Fixes

* update base package, allowing generators to be unnamed ([39eb764](https://github.com/GoProperly/eslint-config-properly-react/commit/39eb7642c18fad5f549db65e3c43b0ee699b06c8))

## [2.11.0](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.10.4...v2.11.0) (2023-02-23)


### Features

* update base config package, introduces func-style rule for function declarations ([c8e2e3f](https://github.com/GoProperly/eslint-config-properly-react/commit/c8e2e3f6a3d997d605daca0a5aeea5ec24b5d08d))

## [2.10.4](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.10.3...v2.10.4) (2023-02-22)


### Bug Fixes

* **deps:** bump semver-regex from 3.1.2 to 3.1.4 ([e6ea694](https://github.com/GoProperly/eslint-config-properly-react/commit/e6ea69428af90f93e0cfb3d441b3a16a6b82205e))
* tweak function-component-definition and jsx-no-useless-fragment rules to suit our codebases ([16d557a](https://github.com/GoProperly/eslint-config-properly-react/commit/16d557ad4d885ece8869755442a1dd3d08459cd4))

## [2.10.3](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.10.2...v2.10.3) (2023-02-22)


### Bug Fixes

* remove testing-library/react from default scope, it should only apply to test files ([8e0f205](https://github.com/GoProperly/eslint-config-properly-react/commit/8e0f205045ea0b8079255c446b9da2a5cd3267d8))

## [2.10.2](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.10.1...v2.10.2) (2023-02-22)


### Bug Fixes

* isolate testing-library/react linting rules to test files only ([2ff3314](https://github.com/GoProperly/eslint-config-properly-react/commit/2ff3314adcedd35fbdd4aca3273d121a1592795b))

## [2.10.1](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.10.0...v2.10.1) (2023-02-22)


### Bug Fixes

* **deps:** bump eslint-plugin-jsx-a11y from 6.4.1 to 6.6.1 ([1aa3cc7](https://github.com/GoProperly/eslint-config-properly-react/commit/1aa3cc7152edecdeab54cd4d52b30fff24052b71))
* **deps:** bump eslint-plugin-testing-library from 3.10.2 to 5.6.0 ([0086110](https://github.com/GoProperly/eslint-config-properly-react/commit/0086110db67708897b999277110ac3ee26eb61b2))

## [2.10.0](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.9.0...v2.10.0) (2023-02-21)


### Features

* **deps:** bump eslint-config-prettier from 7.2.0 to 8.5.0 ([fde38f2](https://github.com/GoProperly/eslint-config-properly-react/commit/fde38f2e9f6e9e6a8ebafdefe19c84b5d53ef8c1))

## [2.9.0](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.8.0...v2.9.0) (2023-02-21)


### Features

* **deps:** bump eslint-config-airbnb from 18.2.1 to 19.0.4 ([5e4a50c](https://github.com/GoProperly/eslint-config-properly-react/commit/5e4a50c3462c37a66b94954d1356019327bddf12))

## [2.8.0](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.7.4...v2.8.0) (2023-01-18)


### Features

* add no-unstable-nested-components rule as an error ([ef3cf1f](https://github.com/GoProperly/eslint-config-properly-react/commit/ef3cf1fe06c8f9712d17ae4beb0db53149ee8aeb))

### [2.7.4](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.7.3...v2.7.4) (2022-09-02)


### Bug Fixes

* update base config to 1.5.1, update npmrc to match www ([3b99785](https://github.com/GoProperly/eslint-config-properly-react/commit/3b997856ff8f962dbdba5ffbe9b59f02fbe2c6fe))
* **deps:** bump eslint-plugin-react-hooks from 4.2.0 to 4.6.0 ([71e928b](https://github.com/GoProperly/eslint-config-properly-react/commit/71e928be28fffbac785e6cab55cc311705f1fae4))

### [2.7.3](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.7.2...v2.7.3) (2022-09-02)


### Bug Fixes

* **deps:** bump eslint-plugin-import from 2.22.1 to 2.26.0 ([0ebaa13](https://github.com/GoProperly/eslint-config-properly-react/commit/0ebaa13b12e17a94388c13535094a885a085c0e9))

### [2.7.2](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.7.1...v2.7.2) (2022-09-02)


### Bug Fixes

* **deps:** bump node-fetch from 2.6.1 to 2.6.7 ([be0b070](https://github.com/GoProperly/eslint-config-properly-react/commit/be0b07029cd9a542ed69b6fb9b75b517db860471))

### [2.7.1](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.7.0...v2.7.1) (2022-09-02)


### Bug Fixes

* **deps:** bump trim-off-newlines from 1.0.1 to 1.0.3 ([4a0deb4](https://github.com/GoProperly/eslint-config-properly-react/commit/4a0deb4f30a3ddc620cb35c5f806e934ac8e7c58))

## [2.7.0](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.6.0...v2.7.0) (2022-09-02)


### Features

* update base linting rules to include "curly", update package lock format ([5809202](https://github.com/GoProperly/eslint-config-properly-react/commit/5809202e9a969fbea02dd744068124469b3bdab1))

## [2.6.0](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.5.0...v2.6.0) (2022-06-21)


### Features

* update base eslint package to include new jest-formatting plugin ([6c25b81](https://github.com/GoProperly/eslint-config-properly-react/commit/6c25b814532d5306305f22caceb8511edee88027))

## [2.5.0](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.4.2...v2.5.0) (2021-06-09)


### Features

* add testing library eslint rules ([00da2ac](https://github.com/GoProperly/eslint-config-properly-react/commit/00da2acbdeeafd2f1adf24e7a25032651d53abe3))
* use the `testing-libary/react` preset ([3fddcce](https://github.com/GoProperly/eslint-config-properly-react/commit/3fddcce9a924d16a1eec21debf1b9684f058b245))

### [2.4.2](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.4.1...v2.4.2) (2021-06-09)


### Bug Fixes

* **deps:** [security] bump handlebars from 4.7.6 to 4.7.7 ([9be8d86](https://github.com/GoProperly/eslint-config-properly-react/commit/9be8d861b860ad22feb28af53755b9a02c35ea1b))
* **deps:** [security] bump hosted-git-info from 2.8.8 to 2.8.9 ([531bbf1](https://github.com/GoProperly/eslint-config-properly-react/commit/531bbf17046e8963a4c39ad08f73d30373ae2cbd))
* **deps:** [security] bump lodash from 4.17.20 to 4.17.21 ([0e6b25f](https://github.com/GoProperly/eslint-config-properly-react/commit/0e6b25f139154e278ac62dea6b934fa176b20c6e))

### [2.4.1](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.4.0...v2.4.1) (2021-06-09)


### Bug Fixes

* **deps:** [security] bump ssri from 6.0.1 to 6.0.2 ([fa92794](https://github.com/GoProperly/eslint-config-properly-react/commit/fa92794613b623473609c1a079fd2065de3fb6b2))
* **deps:** [security] bump y18n from 4.0.0 to 4.0.3 ([f001078](https://github.com/GoProperly/eslint-config-properly-react/commit/f001078f1c90c5680737946ecf92097b20e02e18))

## [2.4.0](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.3.13...v2.4.0) (2021-02-24)


### Features

* update eslint-config-properly-base ([1bcbbac](https://github.com/GoProperly/eslint-config-properly-react/commit/1bcbbac9ea5983bb516fee4610ff5bd000af252a))

### [2.3.13](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.3.12...v2.3.13) (2021-02-01)


### Bug Fixes

* **deps:** bump @goproperly/eslint-config-properly-base ([2ad4ad5](https://github.com/GoProperly/eslint-config-properly-react/commit/2ad4ad596e9b48dfa993f03c43ca18d93ac9d435))

### [2.3.12](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.3.11...v2.3.12) (2021-02-01)


### Bug Fixes

* **deps:** bump eslint-config-prettier from 7.1.0 to 7.2.0 ([229c478](https://github.com/GoProperly/eslint-config-properly-react/commit/229c478d81e902263a4ae6b81e66a3612ee2ed37))

### [2.3.11](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.3.10...v2.3.11) (2021-01-01)


### Bug Fixes

* **deps:** bump @goproperly/eslint-config-properly-base ([85bee58](https://github.com/GoProperly/eslint-config-properly-react/commit/85bee58f1c64196872062b1c10f646f4cb6a2e17))

### [2.3.10](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.3.9...v2.3.10) (2021-01-01)


### Bug Fixes

* **deps:** bump eslint-plugin-react from 7.21.5 to 7.22.0 ([c498342](https://github.com/GoProperly/eslint-config-properly-react/commit/c4983428d8cd27806621f845bb3a42b86781c9fc))

### [2.3.9](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.3.8...v2.3.9) (2020-12-22)


### Bug Fixes

* **deps:** bump @goproperly/eslint-config-properly-base ([35a278b](https://github.com/GoProperly/eslint-config-properly-react/commit/35a278b32f2c233316ad2f3df36dafea4e6a8dcf))

### [2.3.8](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.3.7...v2.3.8) (2020-12-22)


### Bug Fixes

* **deps:** [security] bump ini from 1.3.5 to 1.3.8 ([5d67477](https://github.com/GoProperly/eslint-config-properly-react/commit/5d6747755b96fa11bc91011b73a84ae2cb82ee86))
* **deps:** bump eslint-config-prettier from 6.15.0 to 7.1.0 ([f773cf2](https://github.com/GoProperly/eslint-config-properly-react/commit/f773cf220ee9c6a2e6902d32edc2d867adaa333d))

### [2.3.7](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.3.6...v2.3.7) (2020-12-01)


### Bug Fixes

* **deps:** bump @goproperly/eslint-config-properly-base ([659931e](https://github.com/GoProperly/eslint-config-properly-react/commit/659931edf084e2cb037e12deb4bb3f37e20eb965))
* **deps:** bump eslint-config-airbnb from 18.2.0 to 18.2.1 ([f75af06](https://github.com/GoProperly/eslint-config-properly-react/commit/f75af06b9f2154de8eb920256415024c41a048e3))

### [2.3.6](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.3.5...v2.3.6) (2020-11-01)


### Bug Fixes

* **deps:** bump eslint-plugin-jsx-a11y from 6.3.1 to 6.4.1 ([001f37e](https://github.com/GoProperly/eslint-config-properly-react/commit/001f37eba096dea0f2556687740fabafa566e9b0))
* **deps:** bump eslint-plugin-react-hooks from 4.1.2 to 4.2.0 ([d36745a](https://github.com/GoProperly/eslint-config-properly-react/commit/d36745a2cd2ef7960a7007b7e6adc5a7c93689ea))

### [2.3.5](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.3.4...v2.3.5) (2020-11-01)


### Bug Fixes

* **deps:** [security] bump npm-user-validate from 1.0.0 to 1.0.1 ([348d7ee](https://github.com/GoProperly/eslint-config-properly-react/commit/348d7ee877cc19b9d7bbbaca15c3f056e2c5d4a4))
* **deps:** bump @goproperly/eslint-config-properly-base ([c2893a5](https://github.com/GoProperly/eslint-config-properly-react/commit/c2893a541907a52153aa4cd1459e5688213ec484))
* **deps:** bump eslint-config-prettier from 6.12.0 to 6.15.0 ([50edc04](https://github.com/GoProperly/eslint-config-properly-react/commit/50edc04c16fb6bd77b94494b75e9cc3998583120))
* **deps:** bump eslint-plugin-react from 7.21.3 to 7.21.5 ([0f1cdf3](https://github.com/GoProperly/eslint-config-properly-react/commit/0f1cdf3c88b399096b0650d46d96c1c92f67b84f))

### [2.3.4](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.3.3...v2.3.4) (2020-10-06)


### Bug Fixes

* **deps:** run clean npm install to update/optimize indirect dependencies ([bf616d7](https://github.com/GoProperly/eslint-config-properly-react/commit/bf616d713b40a1a57d90712c1fe8a3d00af10589))

### [2.3.3](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.3.2...v2.3.3) (2020-10-02)


### Bug Fixes

* **deps:** bump @goproperly/eslint-config-properly-base ([e44d9e3](https://github.com/GoProperly/eslint-config-properly-react/commit/e44d9e3bb1eec1194423fe8f74f429d8c94b50d9))
* **deps:** bump eslint-config-prettier from 6.11.0 to 6.12.0 ([bd2e610](https://github.com/GoProperly/eslint-config-properly-react/commit/bd2e610977ab90e99ef1e46ce1932d7401225e66))
* **deps:** bump eslint-plugin-import from 2.22.0 to 2.22.1 ([3d363be](https://github.com/GoProperly/eslint-config-properly-react/commit/3d363beca58c9942b8ad2d091ebca807267c01cf))
* **deps:** bump eslint-plugin-react from 7.20.6 to 7.21.2 ([cd9baf9](https://github.com/GoProperly/eslint-config-properly-react/commit/cd9baf9196606673def3d8f08dbdb46c20040ffd))
* **deps:** bump eslint-plugin-react-hooks from 4.1.0 to 4.1.2 ([b8c3098](https://github.com/GoProperly/eslint-config-properly-react/commit/b8c30988cd689816ee39a52a0ee88c3b7868e047))
* **deps:** update @goproperly/eslint-config-properly-base to 1.2.12 ([035d06e](https://github.com/GoProperly/eslint-config-properly-react/commit/035d06e01a529c19dbf258e03cd3a09351d4975c))

### [2.3.2](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.3.1...v2.3.2) (2020-08-26)


### Bug Fixes

* **deps:** bump @goproperly/eslint-config-properly-base ([a397802](https://github.com/GoProperly/eslint-config-properly-react/commit/a397802231c0520ac445a3175b23dfd956c72af8))
* **deps:** bump eslint-plugin-react from 7.20.3 to 7.20.6 ([a63b275](https://github.com/GoProperly/eslint-config-properly-react/commit/a63b2757c14533731cfd85c2feb18d3a443536f3))
* **deps:** bump eslint-plugin-react-hooks from 4.0.5 to 4.1.0 ([347f646](https://github.com/GoProperly/eslint-config-properly-react/commit/347f64670fa4cf3fe2aa48d9f441d069acff6327))

### [2.3.1](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.3.0...v2.3.1) (2020-08-02)


### Bug Fixes

* **deps:** [security] bump npm from 6.14.5 to 6.14.7 ([20ccc6d](https://github.com/GoProperly/eslint-config-properly-react/commit/20ccc6da2ce1cddd19911ab53050cd404ad7351f))

## [2.3.0](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.2.1...v2.3.0) (2020-07-06)


### Features

* add expectSaga to jest expect rule ([dd21361](https://github.com/GoProperly/eslint-config-properly-react/commit/dd21361124d9f8dcbcaa93df6ae8920665c40f19))

### [2.2.1](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.2.0...v2.2.1) (2020-07-02)


### Bug Fixes

* **deps:** bump @goproperly/eslint-config-properly-base ([8f052c1](https://github.com/GoProperly/eslint-config-properly-react/commit/8f052c1101d956e547235b54061539aee375e644))
* **deps:** bump eslint-config-airbnb from 18.1.0 to 18.2.0 ([038e74d](https://github.com/GoProperly/eslint-config-properly-react/commit/038e74d3c574984c100343574dadbdaa4af48fd5))

## [2.2.0](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.1.6...v2.2.0) (2020-07-02)


### Features

* update eslint-plugin-react-hooks to 4.0.5 ([d5e1848](https://github.com/GoProperly/eslint-config-properly-react/commit/d5e18484d023eda200ae64ec830f88a30cd00928))


### Bug Fixes

* update eslint peerDependency ([68690c3](https://github.com/GoProperly/eslint-config-properly-react/commit/68690c30d84a6a3257981e241fd32771f9c074aa))

### [2.1.6](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.1.5...v2.1.6) (2020-07-01)


### Bug Fixes

* **deps:** bump @goproperly/eslint-config-properly-base ([a1b416f](https://github.com/GoProperly/eslint-config-properly-react/commit/a1b416fb2e31ba11f34398d1654cef9e890ffe78))
* **deps:** bump eslint-plugin-react from 7.20.0 to 7.20.3 ([eea83b8](https://github.com/GoProperly/eslint-config-properly-react/commit/eea83b816298fff6bc222828f955304ddb81b606))

### [2.1.5](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.1.4...v2.1.5) (2020-07-01)


### Bug Fixes

* **deps:** bump eslint-plugin-import from 2.21.2 to 2.22.0 ([319e5a4](https://github.com/GoProperly/eslint-config-properly-react/commit/319e5a45244cd5be81d9ff25e8ff1fe8fbe4bd20))
* **deps:** bump eslint-plugin-jsx-a11y from 6.2.3 to 6.3.1 ([bf2b0eb](https://github.com/GoProperly/eslint-config-properly-react/commit/bf2b0ebae870ae60fbcc0e788e86ef9a82c6855d))

### [2.1.4](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.1.3...v2.1.4) (2020-06-16)


### Bug Fixes

* **deps:** bump @goproperly/eslint-config-properly-base ([0deba02](https://github.com/GoProperly/eslint-config-properly-react/commit/0deba020b528b18e84a375b772b3deeef9898dac))
* **deps:** bump eslint-plugin-import from 2.20.2 to 2.21.2 ([6cc32d4](https://github.com/GoProperly/eslint-config-properly-react/commit/6cc32d46eea8e70dbf05c226c34862f269b0f49d))

### [2.1.3](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.1.2...v2.1.3) (2020-06-02)


### Bug Fixes

* **deps:** bump @goproperly/eslint-config-properly-base ([f254532](https://github.com/GoProperly/eslint-config-properly-react/commit/f254532d645e95217c23fdb2c37b6da9c9b3e7c4))
* **deps:** bump eslint-plugin-react from 7.19.0 to 7.20.0 ([d947039](https://github.com/GoProperly/eslint-config-properly-react/commit/d9470392253e971ab5b43c9d8188060f68ae9c06))

### [2.1.2](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.1.1...v2.1.2) (2020-05-01)


### Bug Fixes

* **deps:** bump @goproperly/eslint-config-properly-base ([28d053f](https://github.com/GoProperly/eslint-config-properly-react/commit/28d053f6ce151e55dba3278dfea088bf76196188))

### [2.1.1](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.1.0...v2.1.1) (2020-04-10)


### Bug Fixes

* update to Prettier 2.0, bump peerDep ([d7f9655](https://github.com/GoProperly/eslint-config-properly-react/commit/d7f96552043215562c0909214332b90aaec5eb56))

## [2.1.0](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.0.15...v2.1.0) (2020-04-02)

### Features

- update eslint-config-properly-base to 1.1.0 ([490b120](https://github.com/GoProperly/eslint-config-properly-react/commit/490b120cb28286cbe6a3887d56e1bacb98f9838d))

### [2.0.15](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.0.14...v2.0.15) (2020-03-17)

### Bug Fixes

- add eslint-config-prettier & eslint-plugin-import as explicit deps ([ffbb95d](https://github.com/GoProperly/eslint-config-properly-react/commit/ffbb95d4bb9a2aa8d6770383836eb855a0687ce6))

### [2.0.14](https://github.com/GoProperly/eslint-config-properly-react/compare/v2.0.13...v2.0.14) (2020-02-01)

### Bug Fixes

- trigger release for new dependencies ([b95a6d6](https://github.com/GoProperly/eslint-config-properly-react/commit/b95a6d60db8d670011e908acf0368ed329ce9bdf))
