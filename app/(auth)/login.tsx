import { Button } from '@/ui/button'
import { Container } from '@/ui/container'
import { useRouter } from 'expo-router'
import { View, Text, Pressable, TextInput } from 'react-native'
import * as React from 'react'
import { colors } from '@/theme/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'

const Login = () => {
  const router = useRouter()
  const [text, onChangeText] = React.useState('')

  return (
    <Container className='justify-between'>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}>
        <View className='flex-1 justify-center gap-20'>
          <View>
            <Text className='font-architectsdaughter text-3xl text-center text-dd-black'>
              Dear Diary
            </Text>
            <Text className='font-wixmadefor text-lg text-center text-dd-gray-one'>
              Discover the power of self-discovery with DearDiary.
            </Text>
          </View>

          <TextInput
            onChangeText={onChangeText}
            value={text}
            placeholder='Email address'
            placeholderTextColor={colors['dd-pink-two']}
            keyboardType='email-address'
            className='p-4 bg-dd-pink-three rounded-lg text-dd-black font-wixmadefor-medium text-lg focus:border-dd-main focus:border-2 leading-6'
          />
        </View>

        <View>
          <Button onPress={() => router.push('/enter-name')}>Log in</Button>
          <Pressable
            className='h-[50px] items-center justify-center'
            onPress={() => router.navigate('/')}>
            <Text className='font-wixmadefor-medium text-center text-lg text-dd-black'>
              Create account
            </Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  )
}

export default Login
