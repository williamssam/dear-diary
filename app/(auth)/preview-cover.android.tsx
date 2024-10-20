import ArrowLeft from '@/assets/icons/arrow-left'
import Cancel from '@/assets/icons/cancel'
import { colors } from '@/theme/colors'
import { Button } from '@/ui/button'
import { Container } from '@/ui/container'
import { useRouter } from 'expo-router'
import { View, Text, Pressable } from 'react-native'

const PreviewCover = () => {
	const router = useRouter()

	return (
		<Container className='justify-between'>
			<View className='flex-row items-center'>
				<Pressable onPress={() => router.back()}>
					<ArrowLeft color={colors['dd-gray-one']} />
				</Pressable>

				<Text className='flex-1 text-center'>Cover preview</Text>
			</View>

			<Button>Next</Button>
		</Container>
	)
}

export default PreviewCover
