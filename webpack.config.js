module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
      path: __dirname + "/dist", 
      filename: "bundle.js",
  },
  module: {
      rules: [
      {
          test: /\.(jsx|js)$/,
          exclude: /node_modules/,
          use: [{
          loader: 'babel-loader',
          options: {
              presets: [
              ['@babel/preset-env', {
                  "targets": "defaults" 
              }],
              '@babel/preset-react'
              ],
          }
          }]
      }
      ]
  }
}
