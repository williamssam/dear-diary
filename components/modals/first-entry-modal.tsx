import { Button } from '@/ui/button'
import { IconX } from '@tabler/icons-react-native'
import { BlurView } from 'expo-blur'
import * as React from 'react'
import { Image, ImageBackground, Modal, Pressable, StyleSheet, Text, View } from 'react-native'

const bgDiamonds = require('@/assets/images/diamonds.png')
const pinkGift = require('@/assets/images/pink-gift-box.png')

export const FirstEntryModal = () => {
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
						<Image source={pinkGift} />
					</ImageBackground>

					<View className='px-8 py-6 gap-2'>
						<Text className='font-wixmadefor-medium text-lg text-center'>
							Congrats on your first entry 🎉
						</Text>
						<Text className='font-wixmadefor text-sm text-center text-dd-gray-one'>
							To celebrate your achievement, we have provided you with your first
							sticker
						</Text>

						<View className='mt-4'>
							<Button>Take a look</Button>
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
