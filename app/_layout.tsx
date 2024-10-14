import { Stack } from "expo-router";

if (__DEV__) {
	require('./config/reactotron-config.js')
}


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
