import { Button } from '@/ui/button'
import { Container } from '@/ui/container'
import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'

const PersonalizeDiary = () => {
	const router = useRouter()

	return (
		<Container>
			<View className='pt-6 gap-3'>
				<Text className='text-lg font-wixmadefor-medium text-dd-pink-one'>
					..Ok, Adeola
				</Text>
				<Text className='text-dd-black text-xl font-wixmadefor-medium'>
					Let’s personalise your diary. Select your diary cover.
				</Text>
			</View>

			<View>
				<Button onPress={() => router.push('/preview-cover')}>
					Preview cover ✨
				</Button>
			</View>
		</Container>
	)
}

export default PersonalizeDiary
