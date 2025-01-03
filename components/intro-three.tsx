import { Button } from '@/ui/button'
import { Container } from '@/ui/container'
import { StatusBar } from 'expo-status-bar'
import { Image, Pressable, Text, View } from 'react-native'

const IntroThreeImg = require('../assets/images/intro-three-img.png')

type IntroProps = {
	setStep: React.Dispatch<React.SetStateAction<number>>
}

const IntroThree = ({ setStep }: IntroProps) => {
	return (
		<Container className='justify-between bg-dd-main android:mb-0'>
			<StatusBar style='light' />

			<Pressable className='self-end'>
				<Text className='text-base font-wixmadefor-medium text-white'>Skip</Text>
			</Pressable>

			<Image source={IntroThreeImg} className='self-center' />

			<View className='py-6 gap-6'>
				<Text className='text-white text-center text-2xl font-wixmadefor-medium'>
					Emotional growth
				</Text>
				<Text className='text-dd-gray-two leading-tight text-lg font-wixmadefor text-center'>
					Discover deeper insights into yourself. Use DearDiary as a safe space to explore
					your emotions, understand your thoughts, and foster personal growth.
				</Text>

				<Button variant='secondary'>Continue</Button>
			</View>
		</Container>
	)
}

export default IntroThree
