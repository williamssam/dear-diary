import { Platform } from 'react-native'

const IS_ANDROID = Platform.OS === 'android'
const IS_IOS = Platform.OS === 'ios'
const IS_NATIVE = IS_ANDROID || IS_IOS