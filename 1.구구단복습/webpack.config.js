const path = require('path')

module.exports = {
  name: '구구단 복습',
  mode: 'development',
  devtool: 'eval',
  resolve: { // app 에서 확장자 없느 파일명들을 검색하기 위함
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: ['./client']
  },
  module: {
    rules: [{
      test: /\.jsx/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      }
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  }
}