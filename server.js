var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
import schema from './src/schema';

(function(){
  var path = require('path');
  var fs = require('fs');
  var graphql = require('graphql');
  var printSchema = require('graphql/utilities').printSchema;
  var graphQLFile = path.join(__dirname, './schema.graphql');

  fs.writeFileSync(graphQLFile, printSchema(schema));
}());

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
