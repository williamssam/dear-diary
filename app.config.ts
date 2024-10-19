import type { ConfigContext, ExpoConfig } from '@expo/config'
import packageJSON from './package.json'

const version = packageJSON.version

export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	name: process.env.APP_NAME || 'Dear Diary (DEV)',
	slug: 'dear-diary',
	version: version.toString(),
	orientation: 'portrait',
	icon: './assets/images/icon.png',
	scheme: 'deardiary',
	userInterfaceStyle: 'automatic',
	platforms: ['android', 'ios'],
	assetBundlePatterns: ['**/*'],
	jsEngine: 'hermes',
	splash: {
		image: './assets/images/splash.png',
		resizeMode: 'cover',
		backgroundColor: '#E93D82',
	},
	ios: {
		supportsTablet: true,
		bundleIdentifier: process.env.APP_BUNDLE_IDENTIFIER || 'com.deardiary.dev',
		config: {
			usesNonExemptEncryption: false,
		},
		entitlements: {
			apsEnvironment: 'production',
		},
	},
	android: {
		adaptiveIcon: {
			foregroundImage: './assets/images/adaptive-icon.png',
			backgroundColor: '#E93D82',
		},
		package: process.env.APP_BUNDLE_IDENTIFIER || 'com.deardiary.dev',
		softwareKeyboardLayoutMode: 'pan',
	},
	plugins: [
		'expo-router',
		'expo-secure-store',
		'react-native-edge-to-edge',
		[
			'expo-build-properties',
			{
				ios: {
					newArchEnabled: true,
				},
				android: {
					newArchEnabled: true,
					enableProguardInReleaseBuilds: true,
					enableShrinkResourcesInReleaseBuilds: true,
				},
			},
		],
		[
			'expo-font',
			{
				fonts: [
					'./assets/fonts/ArchitectsDaughter-Regular.ttf',
					'./assets/fonts/WixMadeforText-Bold.ttf',
					'./assets/fonts/WixMadeforText-ExtraBold.ttf',
					'./assets/fonts/WixMadeforText-Medium.ttf',
					'./assets/fonts/WixMadeforText-Regular.ttf',
				],
			},
		],
		'./plugins/with-splashscreen.js',
		'./plugins/with-android-accent-color.js',
		'./plugins/with-android-splashscreen-translucent.js',
	],
	experiments: {
		typedRoutes: true,
	},
	runtimeVersion: {
		policy: 'appVersion',
	},
})