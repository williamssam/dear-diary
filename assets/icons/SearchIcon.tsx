import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, type SvgProps } from 'react-native-svg'
const SearchIcon = (props: SvgProps) => (
	<Svg width={20} height={20} fill='none' {...props}>
		<G stroke='#344054' strokeLinejoin='round' strokeWidth={1.5} clipPath='url(#a)'>
			<Path strokeLinecap='round' d='m14.583 14.583 3.75 3.75' />
			<Path d='M16.667 9.167a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0Z' />
		</G>
		<Defs>
			<ClipPath id='a'>
				<Path fill='#fff' d='M0 0h20v20H0z' />
			</ClipPath>
		</Defs>
	</Svg>
)
export default SearchIcon
