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
	platforms: ['android', 'ios'],
	userInterfaceStyle: 'automatic',
	primaryColor: '#E93D82',
	newArchEnabled: true,
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
		[
			'react-native-bottom-tabs',
			{
				android: {
					parentTheme: 'Material3',
				},
			},
		],
		'expo-secure-store',
		[
			'expo-splash-screen',
			{
				image: './assets/images/splash-icon.png',
				imageWidth: 200,
				resizeMode: 'contain',
				backgroundColor: '#E93D82',
			},
		],
		[
			'expo-build-properties',
			{
				android: {
					enableProguardInReleaseBuilds: true,
					enableShrinkResourcesInReleaseBuilds: true,
				},
				ios: {
					useFrameworks: true,
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
		[
			'expo-local-authentication',
			{
				faceIDPermission:
					'Allow $(PRODUCT_NAME) to use Face ID to authenticate and verify your identity to read your saved diary.',
			},
		],
		'./plugins/with-android-accent-color.js',
	],
	experiments: {
		typedRoutes: true,
	},
})
