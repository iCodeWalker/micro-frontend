const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  /**
   * devServer:
   * Loading webpack output file inside the browser
   */
  devServer: {
    port: 8080,
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
    /**
     * ModuleFederationPlugin :
     * Here we setup module federation to recieve the files from products app (remote) inside our container app
     */
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:8081/remoteEntry.js",
      },
    }),
  ],
};
