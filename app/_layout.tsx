import 'react-native-gesture-handler'
import '../styles/global.css'

import { Stack } from 'expo-router'
import { SystemBars } from 'react-native-edge-to-edge'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { IS_IOS } from '@/config/platform'

export { ErrorBoundary } from 'expo-router'

export const unstable_settings = {
	initialRouteName: '(app)',
}

if (__DEV__) {
	require('../config/reactotron-config.js')
}

export default function RootLayout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<KeyboardProvider>
				<SafeAreaProvider>
					<SystemBars style='auto' />

					<Stack screenOptions={{ headerShown: false }}>
						<Stack.Screen name='index' />
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
