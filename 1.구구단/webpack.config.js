const path = require('path');

module.exports = {
  name: 'word-realy-setting', // 어떤 것에 대한 설정인지?
  mode: 'development', // 실서비스 : production
  devtool: 'eval', // eval : 빠르게 
  resolve: { // app 에서 확장자 없느 파일명들을 검색하기 위함
    extensions: ['.js', '.jsx'],
  },
  entry: { // 입력
    //app: ['./client.jsx', './WordRealy.jsx'] // 합칠 파일들
    app: ['./client'] // client.jsx 에서 WordRealy 를 불러오고 있다, 확장자
  }, 
  output: { // 출력
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  }


}