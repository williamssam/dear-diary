import { Button } from '@/ui/button'
import { Container } from '@/ui/container'
import { useRouter } from 'expo-router'
import { Image, Pressable, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const IntroTwoImg = require('../../assets/images/intro-two-img.png')

const IntroTwo = () => {
	const router = useRouter()

	return (
		<Container className='justify-between bg-dd-main ndroid:mb-0'>
			<StatusBar style='light' />

			<Pressable className='self-end'>
				<Text className='text-base font-wixmadefor-medium text-white'>
					Skip
				</Text>
			</Pressable>

			<Image source={IntroTwoImg} className='self-center' />

			<View className='py-6 gap-6'>
				<Text className='text-white text-center text-2xl font-wixmadefor-medium'>
					Keep Your Thoughts Safe
				</Text>
				<Text className='text-dd-gray-two leading-tight text-lg font-wixmadefor text-center'>
					Protect your private thoughts and feelings in a secure, customizable
					journal.
				</Text>
				<Button
					variant='secondary'
					onPress={() => router.navigate('/intro-three')}>
					Continue
				</Button>
			</View>
		</Container>
	)
}

export default IntroTwo
