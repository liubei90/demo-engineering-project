# 实践持续集成的例子

## 测试
```yarn add mocha chai -D```

### 使mocha支持es6导入语法
```
yarn add @babel/core @babel/preset-env @babel/register -D
```

## 持续集成
https://travis-ci.org/


## 规范git commit
```
yarn add commitizen -D
```

### 校验git commit是否符合规范
```
yarn add validate-commit-msg husky -D
```
