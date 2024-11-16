import { LinearGradient } from 'expo-linear-gradient'
import { Pressable, StyleSheet, Text, type PressableProps } from 'react-native'

type Variant = 'primary' | 'secondary'

interface ButtonProps extends PressableProps {
	children: React.ReactNode
	variant?: Variant
}

const variantGradient: Record<Variant, string[]> = {
	primary: ['#E93D82', '#E93D82'],
	secondary: ['#101828', '#101828'],
}

export const Button = ({
	children,
	variant = 'primary',
	...props
}: ButtonProps) => {
	return (
		<Pressable
			{...props}
			className={`h-[50px] overflow-hidden rounded-lg border ${variant === 'secondary' ? 'border-dd-black' : 'border-dd-main'}`}>
			<LinearGradient
				colors={variantGradient[variant]}
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
					<Text className='font-wixmadefor-medium android:leading-none text-center text-lg text-white'>
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
