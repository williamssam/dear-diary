import { Button } from '@/ui/button'
import { Container } from '@/ui/container'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image, Pressable, Text, View } from 'react-native'

const EnableNotificationsImg = require('../../assets/images/cat-at-window.png')

const EnableNotifications = () => {
	const router = useRouter()

	return (
		<Container className='justify-between'>
			<StatusBar style='dark' />

			<View className=' gap-4'>
				<Text className='text-dd-black text-2xl font-wixmadefor-medium'>
					Stay in the loop!
				</Text>
				<Text className='text-dd-gray-one text-lg font-wixmadefor'>
					Enable notifications to receive timely prompts and reminders to
					journal your thoughts and feelings.
				</Text>
			</View>

			<Image source={EnableNotificationsImg} className='self-center' />

			<View>
				<Button onPress={() => router.navigate('/(auth)/preview-cover')}>
					Enable notifications
				</Button>

				<Pressable
					className='h-[50px] items-center justify-center'
					onPress={() => router.push('/')}>
					<Text className='font-wixmadefor-medium text-center text-lg text-dd-black'>
						Maybe later
					</Text>
				</Pressable>
			</View>
		</Container>
	)
}

export default EnableNotifications
