import { colors } from '@/theme/colors'
import { IconArrowLeft } from '@tabler/icons-react-native'
import { useRouter } from 'expo-router'
import { Pressable } from 'react-native'

export const BackBtn = () => {
	const router = useRouter()
	return (
		<Pressable accessibilityLabelledBy='back button' onPress={() => router.back()}>
			<IconArrowLeft color={colors.gray_one} />
		</Pressable>
	)
}
