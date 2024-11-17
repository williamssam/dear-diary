import { colors } from '@/theme/colors'
import { fonts } from '@/theme/fonts'
import { withLayoutContext } from 'expo-router'
import { createNativeBottomTabNavigator } from 'react-native-bottom-tabs/react-navigation'

const { Navigator } = createNativeBottomTabNavigator()
const Tabs = withLayoutContext<any, typeof Navigator, any, any>(Navigator)

const TabsLayout = () => {
	return (
		<Tabs
			tabBarActiveTintColor={colors.main}
			tabBarInactiveTintColor={colors.pink_one}
			barTintColor='#FFE9F0'
			activeIndicatorColor={colors.pink_four}
			tabLabelStyle={{
				fontSize: 12,
				fontFamily: fonts.family.medium,
			}}>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Entries',
					tabBarIcon: () => require('../../assets/icons/entries.svg'),
				}}
			/>
			<Tabs.Screen
				name='activities'
				options={{
					title: 'Activities',
					tabBarIcon: () => require('../../assets/icons/calendar.svg'),
				}}
			/>
			<Tabs.Screen
				name='community'
				options={{
					title: 'Communities',
					tabBarIcon: () => require('../../assets/icons/profile-2user.svg'),
				}}
			/>
			<Tabs.Screen
				name='more'
				options={{
					title: 'More',
					tabBarIcon: () => require('../../assets/icons/more-circle.svg'),
				}}
			/>
		</Tabs>
	)
}

export default TabsLayout
