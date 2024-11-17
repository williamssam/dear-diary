import 'react-native-gesture-handler'
import '../styles/global.css'

import { IS_IOS } from '@/config/platform'
import { Stack } from 'expo-router'
import { SystemBars } from 'react-native-edge-to-edge'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export { ErrorBoundary } from 'expo-router'

export const unstable_settings = {
	initialRouteName: '(app)',
}

// if (__DEV__) {
// 	require('../config/reactotron-config.js')
// }

// SplashScreen.preventAutoHideAsync()
// SplashScreen.setOptions({
// 	duration: 1000,
// 	fade: true,
// })
export default function RootLayout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<KeyboardProvider>
				<SafeAreaProvider>
					<SystemBars style='dark' />

					<Stack screenOptions={{ headerShown: false }}>
						<Stack.Screen name='index' />
						<Stack.Screen name='(tabs)' />

						<Stack.Screen
							name='(auth)/preview-cover'
							options={{
								presentation: IS_IOS ? 'modal' : 'card',
							}}
						/>
					</Stack>
				</SafeAreaProvider>
			</KeyboardProvider>
		</GestureHandlerRootView>
	)
}
