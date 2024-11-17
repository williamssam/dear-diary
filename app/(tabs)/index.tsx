import FilterHorizontalIcon from '@/assets/icons/FilterHorizontalIcon'
import SearchIcon from '@/assets/icons/SearchIcon'
import { EmptyScreen } from '@/components/empty-screen'
import { FloatingButton } from '@/components/floating-button'
import { Container } from '@/ui/container'
import * as React from 'react'
import { Pressable, Text, View } from 'react-native'
const Dashboard = () => {
	return (
		<Container>
			<View className='flex-row items-center justify-between'>
				<View>
					<Text className='font-wixmadefor text-xs text-dd-gray-one'>Monday, 16 Sep</Text>
					<Text className='font-wixmadefor-medium text-xl leading-tight text-dd-black'>
						Journal
					</Text>
				</View>

				<View className='flex-row items-center gap-6'>
					<Pressable accessibilityLabel='search journal'>
						<SearchIcon />
					</Pressable>

					<Pressable accessibilityLabel='Filter journal'>
						<FilterHorizontalIcon />
					</Pressable>
				</View>
			</View>

			<EmptyScreen />

			{/* floating action button */}
			<FloatingButton onPress={() => {}} />

			{/* <WelcomeModal /> */}
		</Container>
	)
}

export default Dashboard
