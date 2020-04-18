const path = require("path")

exports.onCreateWebpackConfig = ({ actions, loaders, stage }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
          {
            test: /animejs/,
            use: loaders.null(),
          },
        ],
      },
    })
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "src/components"),
        "~config": path.resolve(__dirname, "src/config"),
        "~images": path.resolve(__dirname, "src/images"),
        "~styles": path.resolve(__dirname, "src/styles"),
        "~themes": path.resolve(__dirname, "src/themes"),
        "~utils": path.resolve(__dirname, "src/utils"),
      },
    },
  })
}
