import { LinearGradient } from 'expo-linear-gradient'
import { Pressable, StyleSheet, Text, type PressableProps } from 'react-native'

interface ButtonProps extends PressableProps {
	children: React.ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<Pressable
			{...props}
			className='h-[50px] overflow-hidden rounded-lg border border-dd-main'>
			<LinearGradient
				colors={['#E93D82', '#E93D82']}
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
				style={StyleSheet.absoluteFill}>
				<LinearGradient
					colors={['rgba(255, 255, 255, 0.16)', 'rgba(255, 255, 255, 0)']}
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 1 }}
					style={{
						...StyleSheet.absoluteFillObject,
						alignItems: 'center',
						justifyContent: 'center',
					}}
					className='items-center justify-center'>
					<Text className='font-wixmadefor-medium text-center text-lg text-white'>
						{children}
					</Text>
				</LinearGradient>
			</LinearGradient>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	gradient: {
		...StyleSheet.absoluteFillObject,
	},
	shadowContainer: {
		flex: 1,
	},
})