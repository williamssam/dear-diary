import { useRouter } from 'expo-router'
import { Image, Pressable, Text, View } from 'react-native'

const design = require('@/assets/images/type=1.png')

export const FirstDiaryDesign = () => {
	const router = useRouter()

	return (
		<Pressable
			className='flex-1'
			onPress={() => router.navigate('/preview-cover')}>
			<Image source={design} />

			<Text className='font-architectsdaughter text-sm absolute z-50 top-24 left-12 text-white'>
				Adeola’s diary
			</Text>

			<View className='size-5 rounded-full border border-[#D0D5DD] absolute z-50 top-3 right-5 bg-white' />
		</Pressable>
	)
}