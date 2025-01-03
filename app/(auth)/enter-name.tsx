import { BackBtn } from '@/components/back-btn'
import { colors } from '@/theme/colors'
import { Button } from '@/ui/button'
import { Container } from '@/ui/container'
import { useRouter } from 'expo-router'
import * as React from 'react'
import { Text, TextInput, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'

const EnterName = () => {
	const router = useRouter()
	const [text, onChangeText] = React.useState('')

	return (
		<Container>
			<KeyboardAwareScrollView contentContainerClassName='justify-between flex-1'>
				<View className='pt-4 gap-3'>
					<BackBtn />

					<View>
						<Text className='font-wixmadefor-medium text-xl text-dd-black'>
							What's your name?
						</Text>
						<Text className='font-wixmadefor text-lg text-dd-gray-one'>
							Enter what name you would like to go by
						</Text>
					</View>
				</View>

				<TextInput
					className='h-[70px] rounded-lg py-1 text-4xl font-wixmadefor-bold bg-transparent text-dd-main mt-4'
					placeholder='Name'
					onChangeText={onChangeText}
					value={text}
					autoComplete='name'
					autoCapitalize='none'
					autoCorrect={false}
					keyboardType='email-address'
					placeholderTextColor={colors.pink_three}
				/>

				<View style={{ marginTop: 'auto' }}>
					<Button onPress={() => router.push('/enter-email')}>Continue</Button>
				</View>
			</KeyboardAwareScrollView>
		</Container>
	)
}

export default EnterName
