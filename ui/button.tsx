import { Pressable, type PressableProps, StyleSheet, Text } from 'react-native'

type Variant = 'primary' | 'secondary'

interface ButtonProps extends PressableProps {
	children: React.ReactNode
	variant?: Variant
}

const variantGradient: Record<Variant, string[]> = {
	primary: ['#E93D82', '#E93D82'],
	secondary: ['#101828', '#101828'],
}

export const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
	return (
		<Pressable
			{...props}
			style={styles.btn}
			className={`android:h-[50px] ios:h-12 overflow-hidden justify-center items-center rounded-lg border ${
				variant === 'secondary' ? 'border-dd-black' : 'border-dd-main'
			}`}>
			{/* <LinearGradient
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
				</LinearGradient>
			</LinearGradient> */}
			<Text className='font-wixmadefor-medium text-center ios:text-base android:text-lg text-white'>
				{children}
			</Text>
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
	btn: {
		// @ts-expect-error
		experimental_backgroundImage:
			'linear-gradient(0deg, #E93D82, #E93D82),linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)',
		boxShadow: '0px 1px 2px 0px rgba(203, 29, 99, 0.4), 0px 0px 0px 1px rgba(203, 29, 99, 1)',
		borderWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.1)',
	},
})
