import Cancel from '@/assets/icons/cancel'
import { Button } from '@/ui/button'
import { useRouter } from 'expo-router'
import { View, Text, Pressable } from 'react-native'

const PreviewCover = () => {
	const router = useRouter()

	return (
		<View className='flex-1 bg-dd-main-light p-6'>
			<View className='flex-row items-center'>
				<Pressable onPress={() => router.back()}>
					<Cancel />
				</Pressable>

				<Text className='flex-1 text-center'>Cover preview</Text>
			</View>

			<Button>Next</Button>
		</View>
	)
}

export default PreviewCover
