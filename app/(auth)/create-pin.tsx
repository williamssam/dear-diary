import { BackBtn } from '@/components/back-btn'
import { NumberPad } from '@/components/number-pad'
import { Button } from '@/ui/button'
import { Container } from '@/ui/container'
import { useRouter } from 'expo-router'
import * as React from 'react'
import { Pressable, Text, View } from 'react-native'

const CreatePin = () => {
	const router = useRouter()
	const [code, setCode] = React.useState([])

	return (
		<Container>
			<View className=' gap-4'>
				<BackBtn />

				<Text className='text-lg font-wixmadefor-medium text-dd-pink-one'>
					Create pin
				</Text>
				<Text className='text-dd-black text-xl font-wixmadefor-medium'>
					Set up a 6 digits security pin to ensure your entries are safe
				</Text>
			</View>

			{/* <OTPField /> */}

			{/* @ts-ignore */}
			<NumberPad code={code} setCode={setCode} />

			<View className='mt-auto'>
				<View>
					<Button onPress={() => router.push('/welcome')}>Create pin</Button>
					<Pressable
						className='h-[50px] items-center justify-center'
						onPress={() => router.navigate('/login')}>
						<Text className='font-wixmadefor-medium text-center text-lg text-dd-black'>
							Not now
						</Text>
					</Pressable>
				</View>
			</View>
		</Container>
	)
}

export default CreatePin
