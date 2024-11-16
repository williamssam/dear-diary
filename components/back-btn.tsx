import ChevronLeft from '@/assets/icons/chevron-left'
import { useRouter } from 'expo-router'
import { Pressable } from 'react-native'

export const BackBtn = () => {
	const router = useRouter()
	return (
		<Pressable
			accessibilityLabelledBy='back button'
			onPress={() => router.back()}>
			<ChevronLeft />
		</Pressable>
	)
}