import { MMKV } from 'react-native-mmkv'

const storage = new MMKV({
	id: 'dear-diary',
})

const setValue = <T>(key: string, value: T) => {
	storage.set(key, JSON.stringify(value))
}

const getValue = (key: string) => {
	const value = storage.getString(key)
	return value ? JSON.parse(value) || null : null
}

const removeValue = (key: string) => {
	storage.delete(key)
}

export { getValue, removeValue, setValue, storage }

