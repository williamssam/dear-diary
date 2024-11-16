import { colors } from '@/theme/colors'
import { Button } from '@/ui/button'
import { Container } from '@/ui/container'
import { IconChevronLeft } from '@tabler/icons-react-native'
import { useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

const PreviewCover = () => {
	const router = useRouter()

	return (
		<Container className='justify-between'>
			<View className='flex-row items-center'>
				<Pressable onPress={() => router.back()}>
					<IconChevronLeft color={colors.gray_one} />
				</Pressable>

				<Text className='flex-1 text-center'>Cover preview</Text>
			</View>

			<Button onPress={() => router.navigate('/create-pin')}>Next</Button>
		</Container>
	)
}

export default PreviewCover
