import { DefaultTheme, css } from 'styled-components';

// /*
const colors = {
	// Primary
	primary50: '#FFF8E1',
	primary100: '#FFECB3',
	primary200: '#FFE082',
	primary300: '#FFD54F',
	primary400: '#FFCA28',
	primary500: '#FFC107',
	primary600: '#FFB300',
	primary700: '#FFA000',
	primary800: '#FF8F00',
	primary900: '#FF6F00',

	// // Secondary
	// secondary50: '#F2F0F9',
	// secondary100: '#D7D3EE',
	// secondary200: '#AFA8DE',
	// secondary300: '#796EC7',
	// secondary400: '#453A97',
	// secondary500: '#241E4E',
	// secondary600: '#1F1A44',
	// secondary700: '#161331',
	// secondary800: '#0D0B1D',
	// secondary900: '#05040A',

	// // Accent
	// accent50: '#FEFAF8',
	// accent100: '#FAE9E3',
	// accent200: '#F4D3C7',
	// accent300: '#EDB8A4',
	// accent400: '#E8A288',
	// accent500: '#E49273',
	// accent600: '#DD764F',
	// accent700: '#B44A23',
	// accent800: '#6C2D15',
	// accent900: '#240F07',

	// // Neutral
	// neutral50: '#F7F8F9',
	// neutral100: '#E7EAEE',
	// neutral200: '#D0D5DD',
	// neutral300: '#B8C0CC',
	// neutral400: '#A0ABBB',
	// neutral500: '#64748B',
	// neutral600: '#4B5768',
	// neutral700: '#323A46',
	// neutral800: '#191D23',
	// neutral900: '#0D0F11',

	// Success
	success50: '#ECFDF5',
	success500: '#10B981',

	// Warning
	warning50: '#FFFBEB',
	warning500: '#CE6C47',

	// Error
	error50: '#FEE1E5',
	error500: '#F71735',

	// Shades
	black: '#000000',
	white: '#ffffff',
	grey400: '#ABABAB',
	grey500: '#777777',
};
// */
/*
const colors = {
	// Primary
	primary50: '#F0ECFE',
	primary100: '#E4DFFD',
	primary200: '#C7BDFA',
	primary300: '#A595F3',
	primary400: '#826BEA',
	primary500: '#5E40DF',
	primary600: '#3E1BDA',
	primary700: '#2B08C7',
	primary800: '#2406A6',
	primary900: '#1C0585',

	// Secondary
	secondary50: '#FFFCF6',
	secondary100: '#FEF2D9',
	secondary200: '#FCE6B3',
	secondary300: '#FBD98E',
	secondary400: '#F9C95E',
	secondary500: '#F8C042',
	secondary600: '#F7B31C',
	secondary700: '#BD8507',
	secondary800: '#725004',
	secondary900: '#261B01',

	// Neutral
	neutral50: '#F9FAFB',
	neutral100: '#F2F4F7',
	neutral200: '#E4E7EC',
	neutral300: '#D0D5DD',
	neutral400: '#98A2B3',
	neutral500: '#667085',
	neutral600: '#475467',
	neutral700: '#344054',
	neutral800: '#1D2939',
	neutral900: '#101828',

	// Success
	success50: '#ECFDF3',
	success500: '#12B76A',

	// Warning
	warning50: '#FFFAEB',
	warning500: '#F79009',

	// Error
	error50: '#FEF3F2',
	error500: '#F04438',

	// Shades
	black: '#000000',
	white: '#ffffff',
};
*/
const fonts = {
	kanitFont: css`
		font-family: 'Kanit', sans-serif;
	`,
	syneFont: css`
		font-family: 'Syne', sans-serif;
	`,
	jostFont: css`
		font-family: 'Jost', sans-serif;
	`,
	syncFont: css`
		font-family: 'Syncopate', sans-serif;
	`,
};
const breakpoints = {
	xs: 450,
	sm: 600,
	md: 800,
	lg: 1000,
	xl: 1200,
};
const theme: DefaultTheme = {
	colors,
	fonts,
	breakpoints,
};
export default theme;
