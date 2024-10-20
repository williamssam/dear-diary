import { Button } from '@/ui/button'
import { Container } from '@/ui/container'
import { useRouter } from 'expo-router'
import { Image, Pressable, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const IntroOneImg = require('../../assets/images/intro-one-img.png')

const IntroOne = () => {
	const router = useRouter()

	return (
		<Container className='justify-between bg-dd-main android:mb-0'>
			<StatusBar style='light' />

			<Pressable className='self-end'>
				<Text className='text-base font-wixmadefor-medium text-white'>
					Skip
				</Text>
			</Pressable>

			<Image source={IntroOneImg} className='self-center' />

			<View className='py-6 gap-6'>
				<Text className='text-white text-center text-2xl font-wixmadefor-medium'>
					Unleash Your Creativity
				</Text>
				<Text className='text-dd-gray-two leading-tight text-lg font-wixmadefor text-center'>
					Express yourself authentically with our customizable journal. Add
					personal touches using stickers, photos, and more. Let your
					imagination run wild and create a truly unique diary that reflects
					your individuality.
				</Text>
				<Button
					variant='secondary'
					onPress={() => router.navigate('/intro-two')}>
					Continue
				</Button>
			</View>
		</Container>
	)
}

export default IntroOne
