const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  /**
   * devServer:
   * Loading webpack output file inside the browser
   */
  devServer: {
    port: 8081,
  },
  plugins: [
    /**
     *
     * HtmlWebpackPlugin :
     * This plugin is gonna take a look at ever file that comes out of the webpack process, this plugin going
     * to find those file names and than add the appropraite/required script tags automatically to the html
     * we have provided.
     *
     */
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
