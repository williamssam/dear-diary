/**
 * @file Set accent color to primaryColor from app.config.js.
 * This way we get a sane default color for spinners, text inputs, etc.
 *
 * @link https://github.dev/bluesky-social/social-app/blob/main/plugins/withAndroidStylesAccentColorPlugin.js
 */

const { withAndroidStyles, AndroidConfig } = require('@expo/config-plugins')

module.exports = function withAndroidStylesAccentColorPlugin(appConfig) {
	return withAndroidStyles(appConfig, decoratedAppConfig => {
		try {
			decoratedAppConfig.modResults = AndroidConfig.Styles.assignStylesValue(
				decoratedAppConfig.modResults,
				{
					add: true,
					parent: AndroidConfig.Styles.getAppThemeLightNoActionBarGroup(),
					name: 'colorAccent',
					value: '@color/colorPrimary',
				}
			)
		} catch (e) {
			console.error('withAndroidStylesAccentColorPlugin failed', e)
		}
		return decoratedAppConfig
	})
}
