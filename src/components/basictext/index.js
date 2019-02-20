import React from 'react'
import styled, { css } from 'styled-components'
import colors from '../../misc/basiccolor'
import PropTypes from 'prop-types'
import {forbidExtraProps} from 'airbnb-prop-types'

/**
 * Variables
 */
const bold = css`
	font-weight: 700;
`
const underline = css`
	text-decoration: underline;
`
const uppercase = css`
	text-transform: uppercase;
`
const center = css`
	text-align: center;
`
const right = css`
	text-align: right;
`
const pointer = css`
	cursor: pointer;
`
const notAllowed = css`
	cursor: not-allowed;
`
const noSelect = css`
	user-select: none;
`

const baseTextSize = 11

const xs = css`
	font-size: ${1.0 * baseTextSize}px;
`
const sm = css`
	font-size: ${1.18 * baseTextSize}px;
`
const md = css`
	font-size: ${1.36 * baseTextSize}px;
`
const lg = css`
	font-size: ${1.54 * baseTextSize}px;
`
const xl = css`
	font-size: ${2.0 * baseTextSize}px;
`
const xxl = css`
	font-size: ${2.36 * baseTextSize}px;
`
const xl3 = css`
	font-size: ${4.36 * baseTextSize}px;
`
const xl4 = css`
	font-size: ${5.81 * baseTextSize}px;
`

const ltrSpaceComfortable = css`
	letter-spacing: -0.01em;
`
const ltrSpaceCompact = css`
	letter-spacing: -0.02em;
`
const ltrSpaceRelaxed = css`
	letter-spacing: 0.07em;
`

const lineHeightComfortable = css`
	line-height: 1.2em;
`
const lineHeightCompact = css`
	line-height: 1.0em;
`

/**
 * Aliases
 */

const heading = css`
	${xl}
	${bold}
	${ltrSpaceCompact}
	${lineHeightComfortable}
`

const subheading = css`
	${lg}
	${bold}
	${ltrSpaceCompact}
	${lineHeightComfortable}
`

const body = css`
	${lg}
	${ltrSpaceComfortable}
	${lineHeightComfortable}
`

const subbody = css`
	${md}
	${ltrSpaceComfortable}
	${lineHeightComfortable}
`
const footnote = css`
	${sm}
	${ltrSpaceComfortable}
	${lineHeightComfortable}
`
const link = css`
	${pointer};
	color: ${colors.blue};
`

const Txt = styled.p`
	@import url('https://fonts.googleapis.com/css?family=Karla:400,700');
	font-family: 'Karla', serif;
	margin: 0;

	/* To handle nested Text components */
	& > .textContainer {
		display: inline-block;
	}

	/* Color */
	color: ${ props => props.color && colors[props.color] };

	/* Text Size */
	${ props => 
		props.xs ? xs :
		props.sm ? sm : 
		props.md ? md :
		props.lg ? lg :
		props.xl ? xl :
		props.xxl ? xxl :
		props.xl3 ? xl3 :
		props.xl4 ? xl4 :
		md
	}

	/* Alignment */
	${ props => 
		props.align &&
		props.align === 'center' ? center :
		props.align === 'right' ? right :
		null
	}

	/* Letter Spacing */
	${ props => props.letterSpacing && props.letterSpacing === 'comfortable' && ltrSpaceComfortable}
	${ props => props.letterSpacing && props.letterSpacing === 'compact' && ltrSpaceCompact}
	${ props => props.letterSpacing && props.letterSpacing === 'relaxed' && ltrSpaceRelaxed}

	/* Line Height */
	${ props => props.lineHeight && props.lineHeight === 'comfortable' && lineHeightComfortable}
	${ props => props.lineHeight && props.lineHeight === 'compact' && lineHeightCompact}

	/* Misc */
	${ props => props.uppercase && uppercase}
	${ props => props.bold && bold}
	${ props => props.pointer && pointer}
	${ props => props.notAllowed && notAllowed}
	${ props => props.noSelect && noSelect}
	${ props => props.underline && underline}

	/* ----- Aliases ----- */
	
	${ props => props.link && link}
	${ props => props.heading && heading}
	${ props => props.subheading && subheading}
	${ props => props.body && body}
	${ props => props.subbody && subbody}
	${ props => props.footnote && footnote}
`

const TextContainer = styled.div`
	width: fit-content;
`

const Link = styled.a`
	text-decoration: none;
`

export default class Text extends React.PureComponent {
	render() {
		if(this.props.link && typeof this.props.link === 'string') {
			return(
				<TextContainer className='textContainer'>
					<Link target='_blank' onClick={(e) => e.stopPropagation()} href={this.props.link}>
						<Txt {...this.props}>
							{this.props.children}
						</Txt>
					</Link>
				</TextContainer>
			)
		}
		return(
			<TextContainer className='textContainer'>
				<Txt {...this.props}>
					{this.props.children}
				</Txt>
			</TextContainer>
		)
	}
}

Text.propTypes = forbidExtraProps({
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
	
	// Variables
	uppercase: PropTypes.bool,
	bold: PropTypes.bool,
	pointer: PropTypes.bool,
	underline: PropTypes.bool,
	notAllowed: PropTypes.bool,
	noSelect: PropTypes.bool,
	color: PropTypes.oneOf(Object.keys(colors)),
	align: PropTypes.oneOf(['center', 'right']),
	xs: PropTypes.bool,
	sm: PropTypes.bool,
	md: PropTypes.bool,
	lg: PropTypes.bool,
	xl: PropTypes.bool,
	xxl: PropTypes.bool,
	xl3: PropTypes.bool,
	xl4: PropTypes.bool,
	letterSpacing: PropTypes.oneOf(['comfortable', 'compact', 'relaxed']),
	lineHeight: PropTypes.oneOf(['comfortable', 'compact']),

	// Aliases
	link: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	heading: PropTypes.bool,
	subheading: PropTypes.bool,
	body: PropTypes.bool,
	subbody: PropTypes.bool,
	footnote: PropTypes.bool,
})

Text.defaultProps = {
	// Text Size: md - already covered in code
	color: 'black',
	letterSpacing: 'comfortable',
	lineHeight: 'comfortable',
}
