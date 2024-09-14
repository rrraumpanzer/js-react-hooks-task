const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const getProducts = (devServer) => {
  devServer.app.get("/products.json", function (req, res) {
    const products = [
      {
        name: "Хлеб",
        id: 1,
        price: 25,
        count: 0,
      },
      {
        name: "Молоко",
        id: 2,
        price: 45,
        count: 0,
      },
      {
        name: "Чай",
        id: 3,
        price: 150,
        count: 0,
      },
    ];

    res.json(products);
  });
};

const config = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
    onBeforeSetupMiddleware: getProducts,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
