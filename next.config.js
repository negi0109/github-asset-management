const pwa = require("next-pwa")
const runtimeCaching = require("next-pwa/cache")

module.exports = pwa({
    pwa: {
      dest: "public",
      runtimeCaching,
    },
    reactStrictMode: true,
    basePath: process.env.ENV == "gh-page" ? "/github-asset-management" : null,
  })
