import { CracoConfig } from '@craco/types'
import { Configuration } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const config: CracoConfig = {
  webpack: {
    configure: (webpackConfig: Configuration) => {
      // Only add bundle analyzer
      if (process.env.ANALYZE) {
        webpackConfig.plugins = webpackConfig.plugins || []
        webpackConfig.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'bundle-report.html',
            openAnalyzer: false,
          })
        )
      }

      return webpackConfig
    },
  },
}

export default config
