const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

// script: {
//     "start":"webpack", (to have dist folder with the bundled file (main.js))
// }
module.exports = {
  /**
   * (to have dist folder with the bundled file (main.js))
   */
  mode: "development",
  /**
   * devServer: This gonna take output from the webpack process and make it available in the browser.
   * Loading webpack output file inside the browser.
   */
  devServer: {
    port: 8082,
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
     * Here we setup module federation to expose the files of products app (remote)
     */
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js", // contains list of all the files that are available from this app + directions on how to load them
      exposes: {
        "./CartIndex": "./src/index",
      },
      shared: ["faker"],
    }),
  ],
};
