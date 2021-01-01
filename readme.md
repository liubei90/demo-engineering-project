# 实践持续集成的例子

[![Build Status](https://travis-ci.org/liubei90/demo-engineering-project.svg?branch=master)](https://travis-ci.org/liubei90/demo-engineering-project)

## 测试

<https://mochajs.bootcss.com/>

<https://www.chaijs.com/>

```yarn add mocha chai -D```

### 使mocha支持es6导入语法

<https://babeljs.io/docs/en/babel-register/>

```shell
yarn add @babel/core @babel/preset-env @babel/register -D
```

## 持续集成

<https://travis-ci.org/>

## 规范git commit

<https://github.com/commitizen/cz-cli>

```shell
yarn add commitizen -D
```

### 校验git commit是否符合规范

<https://github.com/conventional-changelog-archived-repos/validate-commit-msg>

```shell
yarn add validate-commit-msg husky -D
```
