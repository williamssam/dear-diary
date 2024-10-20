import { Button } from '@/ui/button'
import { Container } from '@/ui/container'
import { useRouter } from 'expo-router'
import { Image, Text, View } from 'react-native'

const WelcomeImage = require('../../assets/images/welcome.png')

const Welcome = () => {
	const router = useRouter()

	return (
		<Container className='justify-between'>
			<View className='pt-6 gap-3'>
				<Text className='text-dd-black text-xl font-wixmadefor-medium'>
					Now that you’ve covered the basics
				</Text>
				<Text className='text-dd-black text-xl font-wixmadefor-medium'>
					Discover the power of self-discovery with DearDiary.
				</Text>
			</View>

			<Image source={WelcomeImage} />

			<View>
				<Button onPress={() => router.push('/intro-one')}>Let’s go 🚀</Button>
			</View>
		</Container>
	)
}

export default Welcome
