const webpack = require("webpack");
const config = require("../webpack.config");

config.mode = "production";

webpack(config, (err) => {
  if (err) throw err;
});
