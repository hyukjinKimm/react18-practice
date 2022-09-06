const path = require('path');
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
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
      loader: 'babel-loader', // 엔트리에 들어간 파일들에 babel-loader 를 적용
      options: { // 바벨 로더에 대한 옵션
        presets: [['@babel/preset-env', { // @babel/preset-env 에 대한 설정
          targets: { // 지원할 브라우저 
            browsers: ['> 5% in KR', 'last 2 chrome version'], // browerslist
          },
          debug: true // 개발용
        }],
         '@babel/preset-react'],
        plugins: ['react-refresh/babel'],
      }
    }]
  }, 
  plugins: [// 추가적인 기능을 원할 때
    new webpack.LoaderOptionsPlugin({ debug: true }), // loader 의 options 에 debug : true 를 다 넣어준다.
    new RefreshWebpackPlugin()
  ], 
  output: { // 출력
    path: path.join(__dirname, 'dist'), // 실제경로 
    filename: 'app.js',
    publicPath: '/dist/', // webpack -devServer 가 사용하는 결과물 간의 가상경로..
  },
  devServer : {
    devMiddleware: { publicPath: '/dist/'},
    static: { directory: path.resolve(__dirname )},
    hot: true, 
  }

}