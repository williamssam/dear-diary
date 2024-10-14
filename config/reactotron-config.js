import { storage } from '@/store/storage'
import Reactotron from 'reactotron-react-native'
import mmkvPlugin from 'reactotron-react-native-mmkv'

Reactotron.configure()
	.use(mmkvPlugin({ storage }))
	.useReactNative({
		networking: {
			ignoreUrls: /symbolicate/,
		},
		errors: { veto: stackFrame => false },
		overlay: false,
	})
	.connect()
