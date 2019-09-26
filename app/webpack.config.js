const { resolve } = require('path');

module.exports = {
  // エントリーポイントの設定
  entry: './src/ts/app.ts',
  // ライブラリでnode.jsが使われている場合は追加する
  target: 'node',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: resolve(__dirname, 'public/js')
  },
  resolve: {
    extensions: ['.ts','.js']
  },
  module: {
    rules: [
      {
        // ローダーの処理対象ファイル
        test: /\.ts$/,
        // 利用するローダー
        use: 'babel-loader',
        // ローダーの処理対象から外すディレクトリ
        exclude: /node_modules/
      }
    ]
  }
};

// // output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
// const path = require('path');

// module.exports = {
//   // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
//   mode: 'development',
//   target: 'node',
//   // エントリーポイントの設定
//   entry: './src/js/app.js',
//   // 出力の設定
//   output: {
//     // 出力するファイル名
//     filename: 'bundle.js',
//     // 出力先のパス（絶対パスを指定する必要がある）
//     path: path.join(__dirname, 'public/js')
//   }
// };