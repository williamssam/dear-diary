import { Button } from '@/ui/button'
import { IconX } from '@tabler/icons-react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image, Pressable, Text, View } from 'react-native'
import { diaries } from './personalize-diary'

const classnames = {
	1: 'absolute text-2xl z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white',
	2: 'absolute z-50 bottom-4 left-1/2 -translate-x-1/2 text-white',
	3: 'absolute z-50 top-6 left-1/2 -translate-x-1/2 text-white',
	4: 'absolute z-50 top-6 left-1/2 -translate-x-1/2 text-white',
	5: 'absolute z-50 top-6 left-1/2 -translate-x-1/2 text-white',
	6: 'absolute z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white',
	7: 'absolute z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white',
	8: 'absolute z-50 top-6 left-1/2 -translate-x-1/2 text-white',
}

const PreviewCover = () => {
	const router = useRouter()
	const params = useLocalSearchParams<{ id: string }>()

	const diary = diaries.find(diary => diary.id === Number(params.id))

	return (
		<>
			<StatusBar style='light' />

			<View className='flex-1 bg-dd-main-light py-8 px-6 justify-between'>
				<View className='flex-row items-center'>
					<Pressable onPress={() => router.dismiss()}>
						<IconX size={20} color='#344054' />
					</Pressable>

					<Text className='flex-1 text-center'>Cover preview</Text>
				</View>

				<View>
					<Image source={diary?.image} className='self-center' />

					<Text
						className={`font-architectsdaughter text-3xl ${classnames[diary?.id as keyof typeof classnames]}`}>
						Adeola’s diary
					</Text>
				</View>

				<Button onPress={() => router.replace('/create-pin')} className='mt-10'>
					Next
				</Button>
			</View>
		</>
	)
}

export default PreviewCover
