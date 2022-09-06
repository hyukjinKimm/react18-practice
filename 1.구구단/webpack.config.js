const path = require('path');

module.exports = {
  name: 'word-realy-setting', // 어떤 것에 대한 설정인지?
  mode: 'development', // 실서비스일때는 hidden-source-map
  devtool: 'eval', // eval : 빠르게 
  resolve: { // app 에서 확장자 없느 파일명들을 검색하기 위함
    extensions: ['.js', '.jsx'],
  },
  entry: { // 입력
    //app: ['./client.jsx', './WordRealy.jsx'] // 합칠 파일들
    app: ['./client'] // client.jsx 에서 WordRealy 를 불러오고 있다.
  }, 
  module :{ // entry 에 있는 파일을 읽어서 module 을 적용하고 output 으로 빼는것
    rules: [{
      test: /\.jsx?/, // js 파일과 jsx 파일에 rule 을 적용하겠다.
      loader: 'babel-loader', // 적용할 룰
      options: { // 바벨 로더에 대한 옵션
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [],
      }
    }]
  }, 
  output: { // 출력
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  }


}