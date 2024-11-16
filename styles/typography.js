// Based on hhttps://github.com/showtime-xyz/showtime-frontend/blob/d7484398307423e7382a8c9eef84731707b5340d/packages/design-system/typography/typography.js
import { precomputeValues } from '@capsizecss/core'

const fontFamily = font => {
	return `"${font.replace(/-/g, ' ')}"`
}

const roundToNearestPixel = layoutSize => {
	const ratio = 1
	return Math.round(layoutSize * ratio) / ratio
}

const capsize = options => {
	const values = precomputeValues(options)
	const fontSize = Number.parseFloat(values.fontSize)
	const baselineTrimEm = Number.parseFloat(values.baselineTrim)
	const capHeightTrimEm = Number.parseFloat(values.capHeightTrim)
	const fontScale = 1 // TODO:

	return {
		fontSize,
		lineHeight:
			values.lineHeight !== 'normal' ? Number.parseFloat(values.lineHeight) : undefined,
		marginBottom: roundToNearestPixel(baselineTrimEm * fontSize * fontScale),
		marginTop: roundToNearestPixel(capHeightTrimEm * fontSize * fontScale),
	}
}

const createTextSize = ({
	fontSize,
	lineHeight: leading,
	letterSpacing,
	marginCorrection,
	fontMetrics,
}) => {
	const styles = {
		letterSpacing,
		...capsize({
			fontMetrics,
			fontSize,
			leading,
		}),
	}

	const marginCorrectionForPlatform = 0

	const newStyle = {
		fontSize: styles.fontSize,
		lineHeight: `${styles.lineHeight}px`,
		letterSpacing: styles.letterSpacing,
		marginTop: roundToNearestPixel(styles.marginTop + marginCorrectionForPlatform),
		marginBottom: roundToNearestPixel(styles.marginBottom - marginCorrectionForPlatform),
	}

	return newStyle
}

// Sourced from https://github.com/Dremora/capsize/blob/master/packages/metrics/src/entireMetricsCollection.json
const fontMetricsWixMadefor = {
	familyName: 'Wix Madefor Text',
	category: 'sans-serif',
	capHeight: 715,
	ascent: 1008,
	descent: -252,
	lineGap: 0,
	unitsPerEm: 1000,
	xHeight: 492,
	xWidthAvg: 462,
}

const textSizes = {
	'text-xs': createTextSize({
		fontSize: 12,
		lineHeight: 16,
		marginCorrection: {
			android: -0.1,
			ios: -0.3,
		},
		fontMetrics: fontMetricsWixMadefor,
	}),
	'text-13': createTextSize({
		fontSize: 13,
		lineHeight: 16,
		marginCorrection: {
			android: -0.1,
			ios: -0.3,
		},
		fontMetrics: fontMetricsWixMadefor,
	}),
	'text-sm': createTextSize({
		fontSize: 14,
		lineHeight: 17,
		marginCorrection: {
			android: -0.1,
			ios: -0.3,
		},
		fontMetrics: fontMetricsWixMadefor,
	}),
	'text-15': createTextSize({
		fontSize: 15,
		lineHeight: 18,
		marginCorrection: {
			android: -0.1,
			ios: -0.4,
		},
		fontMetrics: fontMetricsWixMadefor,
	}),
	'text-base': createTextSize({
		fontSize: 16,
		lineHeight: 19,
		marginCorrection: {
			android: -0.1,
			ios: -0.5,
		},
		fontMetrics: fontMetricsWixMadefor,
	}),
	'text-lg': createTextSize({
		fontSize: 18,
		lineHeight: 21,
		marginCorrection: {
			android: 0.2,
			ios: 0,
		},
		fontMetrics: fontMetricsWixMadefor,
	}),
	'text-xl': createTextSize({
		fontSize: 20,
		lineHeight: 23,
		marginCorrection: {
			android: 0,
			ios: -0.5,
		},
		fontMetrics: fontMetricsWixMadefor,
	}),
	'text-2xl': createTextSize({
		fontSize: 24,
		lineHeight: 27,
		marginCorrection: {
			android: -0.3,
			ios: -0.3,
		},
		fontMetrics: fontMetricsWixMadefor,
	}),
	'text-3xl': createTextSize({
		fontSize: 30,
		lineHeight: 33,
		marginCorrection: {
			android: -0.3,
			ios: -0.3,
		},
		fontMetrics: fontMetricsWixMadefor,
	}),
	'text-4xl': createTextSize({
		fontSize: 36,
		lineHeight: 41,
		marginCorrection: {
			android: -0.3,
			ios: -0.3,
		},
		fontMetrics: fontMetricsWixMadefor,
	}),
}

export default { fontFamily, capsize, createTextSize, textSizes }
