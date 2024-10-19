// https://github.com/bluesky-social/social-app/blob/main/plugins/withAndroidSplashScreenStatusBarTranslucentPlugin.js
// fixes splashscreen transparency in android
const { withStringsXml, AndroidConfig } = require('@expo/config-plugins')

module.exports = function withAndroidSplashScreenStatusBarTranslucentPlugin(
	appConfig
) {
	// biome-ignore lint/complexity/useArrowFunction: <explanation>
	return withStringsXml(appConfig, function (decoratedAppConfig) {
		try {
			decoratedAppConfig.modResults = AndroidConfig.Strings.setStringItem(
				[
					{
						_: 'true',
						$: {
							name: 'expo_splash_screen_status_bar_translucent',
							translatable: 'false',
						},
					},
				],
				decoratedAppConfig.modResults
			)
		} catch (e) {
			console.error(
				'withAndroidSplashScreenStatusBarTranslucentPlugin failed',
				e
			)
		}
		return decoratedAppConfig
	})
}
const { Strings } = require('@expo/config-plugins/build/android')
const { setStringItem } = require('@expo/config-plugins/build/android/Strings')
