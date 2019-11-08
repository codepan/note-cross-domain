跨域完全讲解，[查看电子书](http://www.codepan.cc/cross-domain/)

```js
// bundler.config.js
module.exports = {
  entry: './src',
  output: './cross-domain',
  deploy: {
    rootPath: 'xxx',
    connectOptions: {
      host: 'xxx',
      user: 'xxx',
      password: 'xxx'
    }
  }
}
```