import CheckIcon from '@/assets/icons/CheckIcon'
import { Image, Pressable, Text, View } from 'react-native'

type DiaryProps = {
	item: {
		id: number
		image: any
	}
	setSelected: React.Dispatch<React.SetStateAction<number | null>>
	selected: number | null
}

const classnames = {
	1: 'text-sm absolute z-50 top-24 left-12 text-white',
	2: 'text-lg absolute z-50 bottom-4 left-1/2 -translate-x-1/2 text-white',
	3: 'text-lg absolute z-50 top-6 left-1/2 -translate-x-1/2 text-dd-black',
	4: 'text-lg absolute z-50 top-6 left-1/2 -translate-x-1/2 text-white',
	5: 'text-lg absolute z-50 top-6 left-1/2 -translate-x-1/2 text-white',
	6: 'text-lg absolute z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white',
	7: 'text-lg absolute z-50 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white',
	8: 'text-lg absolute z-50 top-6 left-1/2 -translate-x-1/2 text-white',
}

export const Diary = ({ item, selected, setSelected }: DiaryProps) => {
	return (
		<Pressable className='flex-1' onPress={() => setSelected(item.id)}>
			<Image source={item.image} className='w-[165px] h-[200px]' />

			<Text
				className={`font-architectsdaughter ${classnames[item.id as keyof typeof classnames]}`}>
				Adeola’s diary
			</Text>

			<View
				className={`size-5 rounded-full border absolute z-50 top-3 right-5 items-center justify-center ${
					selected === item.id
						? 'bg-dd-main border-[#CB1D63]'
						: 'bg-white border-[#D0D5DD]'
				}`}>
				{selected === item.id && <CheckIcon />}
			</View>
		</Pressable>
	)
}
