import { colors } from '@/theme/colors'
import { IconArrowLeft, IconFaceId } from '@tabler/icons-react-native'
import type * as React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'

const { width } = Dimensions.get('window')

const dialPadContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'X']
const pinLength = 6
const pinLengthArray = Array(pinLength).fill('')
const dialPadSize = width * 0.15
const pinContainerSize = width / 2
const pinSize = pinContainerSize / pinLength
const stepOne = [1, 2, 3]
const stepTwo = [4, 5, 6]
const stepThree = [7, 8, 9]
const stepFour = ['face', 0, 'X']

type NumberPadProps = {
	code: any[]
	setCode: React.Dispatch<React.SetStateAction<any[]>>
}

const inputWidth = width / 7

export const NumberPad = ({ code, setCode }: NumberPadProps) => {
	return (
		<View className='flex-col flex-1 justify-between gap-2 py-6'>
			<View className='flex-row items-center justify-center gap-1'>
				{pinLengthArray.map((_, index) => {
					const item = dialPadContent[index]
					const isSelected = typeof item === 'number' && code?.[index] !== undefined

					return (
						<View
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
						>
							<View
								style={{
									width: inputWidth,
								}}
								className={`h-16 items-center justify-center rounded-lg bg-dd-pink-three ${
									isSelected ? 'border-2 border-dd-main/50' : ''
								}`}>
								{isSelected && (
									<View
										style={{
											width: pinSize * 0.5,
											height: pinSize * 0.5,
											borderRadius: pinSize * 0.35,
										}}
										className='bg-dd-pink-two'
									/>
								)}
							</View>
						</View>
					)
				})}
			</View>

			<View>
				<View className='flex-row items-center justify-center gap-2'>
					{stepOne.map(item => (
						<TouchableOpacity
							key={item}
							style={{
								width: '30%',
								height: dialPadSize,
							}}
							onPress={() => setCode(prev => [...prev, item])}
							className='items-center justify-center'>
							<Text className='font-wixmadefor-medium text-xl'>{item}</Text>
						</TouchableOpacity>
					))}
				</View>

				<View className='flex-row items-center justify-center gap-2'>
					{stepTwo.map(item => (
						<TouchableOpacity
							key={item}
							style={{
								width: '30%',
								height: dialPadSize,
							}}
							onPress={() => setCode(prev => [...prev, item])}
							className='items-center justify-center'>
							<Text className='font-wixmadefor-medium text-xl'>{item}</Text>
						</TouchableOpacity>
					))}
				</View>

				<View className='flex-row items-center justify-center gap-2'>
					{stepThree.map(item => (
						<TouchableOpacity
							key={item}
							style={{
								width: '30%',
								height: dialPadSize,
							}}
							onPress={() => setCode(prev => [...prev, item])}
							className='items-center justify-center'>
							<Text className='font-wixmadefor-medium text-xl'>{item}</Text>
						</TouchableOpacity>
					))}
				</View>

				<View className='flex-row items-center justify-center gap-2'>
					{stepFour.map(item => (
						<TouchableOpacity
							key={item}
							style={{
								width: '30%',
								height: dialPadSize,
							}}
							className='items-center justify-center'
							onPress={() => {
								if (item === 'X') {
									setCode(prev => prev.slice(0, -1))
									return
								}

								if (item === 'face') {
									return
								}

								setCode(prev => [...prev, item])
							}}>
							{item === 'X' ? (
								<IconArrowLeft color={colors.gray_one} />
							) : item === 'face' ? (
								<IconFaceId color={colors.gray_one} />
							) : (
								<Text className='font-wixmadefor-medium text-xl'>{item}</Text>
							)}
						</TouchableOpacity>
					))}
				</View>
			</View>
		</View>
	)
}
