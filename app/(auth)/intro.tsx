import { IntroOne } from '@/components/intro-one'
import IntroThree from '@/components/intro-three'
import IntroTwo from '@/components/intro-two'
import { useRouter } from 'expo-router'
import * as React from 'react'
import { ScrollView } from 'react-native'

const Intro = () => {
	const [step, setStep] = React.useState(1)
	const router = useRouter()

	return (
		<ScrollView
			contentContainerClassName='flex-1'
			horizontal
			showsHorizontalScrollIndicator={false}>
			{/* <StatusBar translucent /> */}
			{step === 1 && <IntroOne setStep={setStep} />}
			{step === 2 && <IntroTwo setStep={setStep} />}
			{step === 3 && <IntroThree setStep={setStep} />}
		</ScrollView>
	)
}

export default Intro
