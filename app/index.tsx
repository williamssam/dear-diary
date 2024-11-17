import { Button } from '@/ui/button'
import { Container } from '@/ui/container'
import { useRouter } from 'expo-router'
import { Image, Pressable, Text, View } from 'react-native'

export default function Index() {
	const router = useRouter()

	return (
		<Container className='justify-between'>
			<View className='pt-6 gap-4'>
				<Text className='text-lg font-wixmadefor-medium text-dd-pink-one'>
					Hi, I'm Lucie
				</Text>
				<Text className='text-dd-black text-xl font-wixmadefor-medium'>
					Welcome to Dear diary. We help you express your thoughts and feelings in a safe
					and private space.
				</Text>
			</View>

			<View className='gap-10'>
				<View className='justify-center items-center gap-4'>
					<Image source={require('../assets/images/chat.png')} className='ml-28' />
					<Image source={require('../assets/images/cat.png')} />
				</View>

				<View>
					<Button onPress={() => router.push('/enter-name')}>Get Started</Button>
					<Pressable
						className='h-[50px] items-center justify-center'
						onPress={() => router.navigate('/(tabs)')}>
						<Text className='font-wixmadefor-medium text-center text-lg text-dd-black'>
							Log in
						</Text>
					</Pressable>
				</View>
			</View>
		</Container>
	)
}
