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
        ],
      },
    })
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "src/components"),
        "~config": path.resolve(__dirname, "src/config"),
        "~styles": path.resolve(__dirname, "src/styles"),
        "~utils": path.resolve(__dirname, "src/utils"),
      },
    },
  })
}
