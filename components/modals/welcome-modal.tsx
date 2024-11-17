import { Button } from '@/ui/button'
import { IconX } from '@tabler/icons-react-native'
import { BlurView } from 'expo-blur'
import * as React from 'react'
import { Image, ImageBackground, Modal, Pressable, StyleSheet, Text, View } from 'react-native'

const bgDiamonds = require('@/assets/images/diamonds.png')
const pinkBook = require('@/assets/images/pink-book.png')

export const WelcomeModal = () => {
	const [modalVisible, setModalVisible] = React.useState(true)

	return (
		<Modal animationType='fade' statusBarTranslucent transparent={true} visible={modalVisible}>
			<BlurView
				intensity={10}
				style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
				experimentalBlurMethod='none'
				className='flex-1 items-center justify-center bg-black/10'>
				<View
					style={style.container}
					className='bg-white w-5/6 rounded-2xl relative overflow-hidden border border-[#F2F2F2]'>
					<Pressable
						accessibilityLabel='close modal'
						onPress={() => setModalVisible(false)}
						className='size-11 rounded-full z-50 absolute top-2 right-2 items-center justify-center bg-white'>
						<IconX color='#141B34' size={20} />
					</Pressable>

					<ImageBackground
						source={bgDiamonds}
						className='h-60 justify-center items-center bg-dd-main-light'>
						<Image source={pinkBook} />
					</ImageBackground>

					<View className='px-8 py-6 gap-2'>
						<Text className='font-wixmadefor text-lg text-center'>
							Welcome, <Text className='font-wixmadefor-medium'>Adeola</Text>
						</Text>
						<Text className='font-wixmadefor text-sm text-center text-dd-gray-one'>
							Explore your thoughts and feelings in Dear Diary. Start journaling today
							and discover the power of self-expression.
						</Text>

						<View className='mt-4'>
							<Button>Write an entry</Button>
						</View>
					</View>
				</View>
			</BlurView>
		</Modal>
	)
}

const style = StyleSheet.create({
	container: {
		boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
	},
})
