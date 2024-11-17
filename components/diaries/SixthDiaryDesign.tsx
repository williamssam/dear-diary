import { useRouter } from 'expo-router'
import { Image, Pressable, Text, View } from 'react-native'

const design = require('@/assets/images/type=6.png')

export const SixthDiaryDesign = () => {
	const router = useRouter()

	return (
		<Pressable
			className='flex-1'
			onPress={() => router.navigate('/preview-cover')}>
			<Image source={design} />

			<Text className='font-architectsdaughter text-lg absolute z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white'>
				Adeola’s diary
			</Text>

			<View className='size-5 rounded-full border border-[#D0D5DD] absolute z-50 top-3 right-5 bg-white' />
		</Pressable>
	)
}