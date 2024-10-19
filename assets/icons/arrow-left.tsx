import * as React from 'react'
import Svg, { Path, type SvgProps } from 'react-native-svg'

const ArrowLeft = (props: SvgProps) => (
	<Svg width={24} height={24} viewBox='0 0 24 24' {...props}>
		<Path
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m4 12 6-6m-6 6 6 6m-6-6h10.5m5.5 0h-2.5'
		/>
	</Svg>
)
export default ArrowLeft
