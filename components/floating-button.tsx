import { IconPlus } from '@tabler/icons-react-native'
import { Pressable, StyleSheet } from 'react-native'

type ButtonProps = {
	onPress: () => void
}

export const FloatingButton = ({ onPress }: ButtonProps) => {
	return (
		<Pressable
			onPress={onPress}
			style={styles.btn}
			className='rounded-full w-12 h-12 items-center justify-center absolute bottom-32 android:bottom-6 right-6'>
			<IconPlus color='#fff' />
		</Pressable>
	)
}

const styles = StyleSheet.create({
	btn: {
		// @ts-expect-error
		experimental_backgroundImage:
			'linear-gradient(0deg, #E93D82, #E93D82),linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)',
		boxShadow: '0px 1px 2px 0px rgba(203, 29, 99, 0.4), 0px 0px 0px 1px rgba(203, 29, 99, 1)',
		borderWidth: 1.5,
		borderColor: 'rgba(255, 255, 255, 0.2)',
	},
})
