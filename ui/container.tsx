import type { PropsWithChildren } from 'react'
import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { twMerge } from 'tailwind-merge'

interface ContainerProps extends PropsWithChildren {
	className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
	const insets = useSafeAreaInsets()

	return (
		<View className='flex-1 bg-dd-main-light'>
			<View
				style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
				className={twMerge('flex-1 bg-dd-main-light px-6', className)}>
				{children}
			</View>
		</View>
	)
}
