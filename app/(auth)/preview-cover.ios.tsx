import { Button } from '@/ui/button'
import { IconX } from '@tabler/icons-react-native'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Pressable, Text, View } from 'react-native'

const PreviewCover = () => {
	const router = useRouter()

	return (
		<>
			<StatusBar style='light' />

			<View className='flex-1 bg-dd-main-light p-6 justify-between'>
				<View className='flex-row items-center'>
					<Pressable onPress={() => router.back()}>
						<IconX color='#344054' />
					</Pressable>

					<Text className='flex-1 text-center'>Cover preview</Text>
				</View>

				<Button onPress={() => router.navigate('/create-pin')}>Next</Button>
			</View>
		</>
	)
}

export default PreviewCover
