import * as React from 'react'
import Svg, { type SvgProps, Path } from 'react-native-svg'
const Cancel = (props: SvgProps) => (
	<Svg width={20} height={20} fill='none' {...props}>
		<Path
			stroke='#344054'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M15.834 4.167 4.167 15.833m0-11.666 11.667 11.666'
		/>
	</Svg>
)
export default Cancel
