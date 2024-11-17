import DocumentTextIcon from '@/assets/icons/DocumentTextIcon'
import { Text, View } from 'react-native'

export const EmptyScreen = () => {
	return (
		<View className='flex-1 self-center items-center gap-2 justify-center absolute top-1/2 w-[260px]'>
			<DocumentTextIcon />

			<Text className='font-wixmadefor-medium text-center text-xl'>No entries yet</Text>
			<Text className='font-wixmadefor text-center text-sm text-dd-gray-one'>
				Start your journaling journey today! Tap the plus button to create your first entry.
			</Text>
		</View>
	)
}
