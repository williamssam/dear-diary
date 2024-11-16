import React from 'react'
import { Platform, Text, View } from 'react-native'
import {
	CodeField,
	Cursor,
	useBlurOnFulfill,
	useClearByFocusCell,
} from 'react-native-confirmation-code-field'

const CELL_COUNT = 6

export const OTPField = () => {
	const [value, setValue] = React.useState('')
	const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value,
		setValue,
	})

	return (
		<View className='mt-8'>
			{/* @ts-expect-error */}
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
						style={{ lineHeight: 48 }}
						className={`w-16 h-16 rounded-lg text-3xl text-center font-wixmadefor-medium bg-dd-pink-three text-dd-black ${isFocused ? 'border-2 border-dd-main/50' : 'border border-dd-pink-three'}`}
						onLayout={getCellOnLayoutHandler(index)}>
						{symbol || (isFocused ? <Cursor /> : null)}
					</Text>
				)}
			/>
		</View>
	)
}