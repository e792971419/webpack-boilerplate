import Analytics from 'analytics'
import googleAnalyticsPlugin from '@analytics/google-analytics'

const analytics = Analytics({
    app: 'my-app',
    debug: true,
    plugins: [
      /* Load Google Analytics v4 */
      googleAnalyticsPlugin({
        measurementIds: ['G-3PSHCSF16M'],
      }),
 
    ],
  })

export default analytics