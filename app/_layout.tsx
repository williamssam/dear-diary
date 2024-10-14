import { Stack } from "expo-router";
import { KeyboardProvider } from 'react-native-keyboard-controller'

import '../styles/global.css'

if (__DEV__) {
	require('../config/reactotron-config.js')
}

export default function RootLayout() {
  return (
			<KeyboardProvider>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name='index' />
				</Stack>
			</KeyboardProvider>
		)
}
