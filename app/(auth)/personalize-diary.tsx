import { BackBtn } from '@/components/back-btn'
import { Diary } from '@/components/diary'
import { colors } from '@/theme/colors'
import { Button } from '@/ui/button'
import { useRouter } from 'expo-router'
import * as React from 'react'
import {
	FlatList,
	type ListRenderItemInfo,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const diaries = [
	{
		id: 1,
		image: require('@/assets/images/type=1.png'),
	},
	{
		id: 2,
		image: require('@/assets/images/type=2.png'),
	},
	{
		id: 3,
		image: require('@/assets/images/type=3.png'),
	},
	{
		id: 4,
		image: require('@/assets/images/type=4.png'),
	},
	{
		id: 5,
		image: require('@/assets/images/type=5.png'),
	},
	{
		id: 6,
		image: require('@/assets/images/type=6.png'),
	},
	{
		id: 7,
		image: require('@/assets/images/type=7.png'),
	},
	{
		id: 8,
		image: require('@/assets/images/type=8.png'),
	},
]

const PersonalizeDiary = () => {
	const router = useRouter()
	const insets = useSafeAreaInsets()
	const [selected, setSelected] = React.useState<number | null>(null)

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const renderItem = React.useCallback(
		({ item }: ListRenderItemInfo<(typeof diaries)[number]>) => (
			<Diary item={item} selected={selected} setSelected={setSelected} />
		),
		[selected, setSelected]
	)

	return (
		<>
			<View className='flex-1'>
				<FlatList
					showsVerticalScrollIndicator={false}
					data={diaries}
					numColumns={2}
					style={{
						paddingTop: insets.top,
						paddingBottom: insets.bottom,
						backgroundColor: colors.main_light,
					}}
					renderItem={renderItem}
					keyExtractor={item => item.id.toString()}
					contentContainerClassName='gap-4 bg-dd-main-light px-6 pb-32'
					columnWrapperClassName='gap-1 justify-between'
					ListHeaderComponent={
						<View className='gap-4 pb-4'>
							<BackBtn />

							<Text className='text-lg font-wixmadefor-medium text-dd-pink-one'>
								..Ok, Adeola
							</Text>
							<Text className='text-dd-black text-xl font-wixmadefor-medium'>
								Let’s personalise your diary. Select your diary cover.
							</Text>
						</View>
					}
				/>
			</View>

			<View
				// @ts-expect-error
				style={styles.footer}
				className='absolute w-full bottom-0 p-6 h-32 justify-center'>
				<Button
					onPress={() =>
						router.push({
							pathname: '/preview-cover',
							params: {
								id: selected,
							},
						})
					}>
					Preview cover ✨
				</Button>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	footer: {
		// @ts-expect-error
		experimental_backgroundImage:
			'linear-gradient(180deg, rgba(255, 233, 240, 0) 0%, #FFE9F0 50%)',
	},
})

// background: ;

export default PersonalizeDiary