import { BackBtn } from '@/components/back-btn'
import { EightDiaryDesign } from '@/components/diaries/EightDiaryDesign'
import { FifthDiaryDesign } from '@/components/diaries/FifthDiaryDesign'
import { FirstDiaryDesign } from '@/components/diaries/FirstDiaryDesign'
import { FourthDiaryDesign } from '@/components/diaries/FourthDiaryDesign'
import { SecondDiaryDesign } from '@/components/diaries/SecondDiaryDesign'
import { SeventhDiaryDesign } from '@/components/diaries/SeventhDiaryDesign'
import { SixthDiaryDesign } from '@/components/diaries/SixthDiaryDesign'
import { ThirdDiaryDesign } from '@/components/diaries/ThirdDiaryDesign'
import { colors } from '@/theme/colors'
import { Button } from '@/ui/button'
import { useRouter } from 'expo-router'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const diaries = [
	{
		id: 1,
		component: <FirstDiaryDesign />,
	},
	{
		id: 2,
		component: <SecondDiaryDesign />,
	},
	{
		id: 3,
		component: <ThirdDiaryDesign />,
	},
	{
		id: 4,
		component: <FourthDiaryDesign />,
	},
	{
		id: 5,
		component: <FifthDiaryDesign />,
	},
	{
		id: 6,
		component: <SixthDiaryDesign />,
	},
	{
		id: 7,
		component: <SeventhDiaryDesign />,
	},
	{
		id: 8,
		component: <EightDiaryDesign />,
	},
]

const PersonalizeDiary = () => {
	const router = useRouter()
	const insets = useSafeAreaInsets()

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
					renderItem={({ item }) => item.component}
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
				<Button onPress={() => router.push('/preview-cover')}>
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