import { Button } from '@/ui/button'
import { Container } from '@/ui/container'
import { useRouter } from 'expo-router'
import * as React from 'react'
import {
	Image,
	Platform,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import {
	CodeField,
	Cursor,
	useBlurOnFulfill,
	useClearByFocusCell,
} from 'react-native-confirmation-code-field'

const CELL_COUNT = 6

const CreatePin = () => {
	const router = useRouter()
	const [value, setValue] = React.useState('')
	const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value,
		setValue,
	})

	return (
		<Container className='justify-between'>
			<View className='pt-6 gap-4'>
				<Text className='text-lg font-wixmadefor-medium text-dd-pink-one'>
					Create pin
				</Text>
				<Text className='text-dd-black text-xl font-wixmadefor-medium'>
					Set up a 6 digits security pin to ensure your entries are safe
				</Text>
			</View>

			{/* @ts-ignore */}
			<CodeField
				ref={ref}
				{...props}
				// Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
				value={value}
				onChangeText={setValue}
				cellCount={CELL_COUNT}
				keyboardType='number-pad'
				textContentType='oneTimeCode'
				autoComplete={Platform.select({
					android: 'sms-otp',
					default: 'one-time-code',
				})}
				renderCell={({ index, symbol, isFocused }) => (
					<Text
						key={index}
						className={`w-14 h-14 rounded-lg text-lg bg-dd-pink-three text-dd-black text-center ${isFocused ? 'border-2 border-dd-main' : 'border border-dd-pink-three'}`}
						onLayout={getCellOnLayoutHandler(index)}>
						{symbol ||
							(isFocused ? (
								<Text style={{ color: '#000' }}>
									<Cursor />
								</Text>
							) : null)}
					</Text>
				)}
			/>

			<View className='gap-10'>
				<View>
					<Button onPress={() => router.push('/enter-name')}>Create pin</Button>
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
