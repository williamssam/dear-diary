const { AndroidConfig, withAndroidStyles } = require('@expo/config-plugins')

/**
 * Modifies the `android/app/src/main/res/values/styles.xml` file to append the
 * the following to the Theme.App.SplashScreen style. fixes: https://github.com/expo/expo/issues/16084
 *
 * <item name="android:windowIsTranslucent">true</item>
 * @link https://github.com/expo/expo/issues/16084#issuecomment-1261330440
 */
module.exports = function withSplashWindowIsTranslucentPlugin(config) {
	return withAndroidStyles(config, async config => {
		config.modResults = await configureFullScreenDialog(config.modResults)
		return config
	})
}

async function configureFullScreenDialog(styles) {
	const splashScreen = styles.resources.style.find(
		style => style.$.name === 'Theme.App.SplashScreen'
	)

	if (splashScreen) {
		splashScreen.item = splashScreen.item.filter(
			item => item.$.name !== 'android:windowIsTranslucent'
		)
		splashScreen.item.push(
			AndroidConfig.Resources.buildResourceItem({
				name: 'android:windowIsTranslucent',
				value: true,
			})
		)
	}

	return styles
}
const { Resources } = require('@expo/config-plugins/build/android')
const {
	buildResourceItem,
} = require('@expo/config-plugins/build/android/Resources')
