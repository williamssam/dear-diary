import Reactotron from 'reactotron-react-native'

Reactotron.use()
	.configure()
	.useReactNative({
		networking: {
			ignoreUrls: /symbolicate/,
		},
		errors: { veto: stackFrame => false },
		overlay: false,
	})
	.connect()
