import { colors } from '@/theme/colors'
import { Button } from '@/ui/button'
import { useRouter } from 'expo-router'
import * as React from 'react'
import { ImageBackground, Pressable, Text, TextInput, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'

const bgDiamonds = require('@/assets/images/diamonds.png')

const Login = () => {
  const router = useRouter()
  const [text, onChangeText] = React.useState('')

  return (
		<ImageBackground source={bgDiamonds} className='justify-between flex-1 bg-dd-main-light'>
			<KeyboardAwareScrollView contentContainerClassName='flex-1 p-6 android:mb-4 justify-between'>
				{/* <SafeAreaView className='flex-1'> */}
				<View className='justify-center gap-20 mt-32'>
					<View>
						<Text className='font-architectsdaughter text-4xl text-center text-dd-black'>
							DearDiary
						</Text>
						<Text className='font-wixmadefor text-lg text-center text-dd-gray-one'>
							Discover the power of self-discovery with DearDiary.
						</Text>
					</View>

					<View className='gap-4'>
						<TextInput
							onChangeText={onChangeText}
							value={text}
							placeholder='Email address'
							placeholderTextColor='#E293AA'
							keyboardType='email-address'
							className='px-5 h-[54px] bg-dd-pink-three rounded-lg text-dd-black font-wixmadefor-regular text-lg focus:border-dd-main focus:border-2 leading-6'
						/>
						<TextInput
							onChangeText={onChangeText}
							value={text}
							placeholder='Password'
							secureTextEntry
							placeholderTextColor={colors.pink_two}
							keyboardType='email-address'
							className='px-5 h-[54px] bg-dd-pink-three rounded-lg text-dd-black font-wixmadefor-regular text-lg focus:border-dd-main focus:border-2 leading-6'
						/>

						<View className='mt-4'>
							<Button onPress={() => router.push('/enter-name')}>Log in</Button>

							<Pressable
								className='h-[50px] items-center justify-center'
								onPress={() => router.navigate('/')}>
								<Text className='font-wixmadefor-medium text-center text-base text-dd-main'>
									Forgot Password ?
								</Text>
							</Pressable>
						</View>
					</View>
				</View>

				<Pressable
					className='h-[50px] mt-auto items-center justify-center'
					onPress={() => router.navigate('/')}>
					<Text className='font-wixmadefor-medium text-center text-base text-dd-black'>
						Create account
					</Text>
				</Pressable>
				{/* </SafeAreaView> */}
			</KeyboardAwareScrollView>
		</ImageBackground>
  )
}

export default Login
