import * as React from 'react'
import Svg, { type SvgProps, Path } from 'react-native-svg'
const CheckIcon = (props: SvgProps) => (
	<Svg width={10} height={10} fill='none' {...props}>
		<Path
			stroke='#fff'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.667}
			d='M8.333 2.5 3.749 7.083 1.666 5'
		/>
	</Svg>
)
export default CheckIcon
