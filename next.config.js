const isProduction = process.env.NODE_ENV == "production"

module.exports = {
  reactStrictMode: true,
  basePath: isProduction ? "/github-asset-management" : null,
}
