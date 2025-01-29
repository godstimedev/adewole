import styled from 'styled-components';
import { maxQuery } from '../../../utilities';

export const Container = styled.section`
	height: 1076.84px;
	background-color: #252531;
	padding-top: 8rem;

	display: flex;
	flex-direction: column;
	gap: 3rem;

	${maxQuery('md')} {
		gap: 4rem;
	}

	> div:first-child {
		display: flex;
		justify-content: center;
		gap: 2rem;
		/* padding: 1rem; */

		.img-con-1 {
			width: 251.71px;
			height: 545.03px;

			${maxQuery('lg')} {
				display: none;
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 8px;
			}
		}
		.img-con-2 {
			width: 251.71px;
			height: 545.03px;
			margin-top: 4rem;

			${maxQuery('lg')} {
				margin-top: 0rem;
			}

			&.non {
				${maxQuery('sm')} {
					display: none;
				}
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				border: 8px;
			}
		}
	}

	> div:last-child {
		display: flex;
		align-items: center;
		width: 100%;
		overflow: hidden; /* Hides the overflow */
		white-space: nowrap; /* Prevents line breaks */
		position: relative;

		.slider {
			display: inline-flex;
			align-items: center;
			gap: 0.75rem;
			animation: scroll 120s linear infinite; /* Continuous scroll */
			animation-play-state: running;
		}

		.slider h1 {
			width: 100%;
			${({ theme }) => theme.fonts.syneFont}

			font-size: 5.25rem;
			font-weight: 700;
			line-height: 6.3rem;
			letter-spacing: -0.4rem;

			${maxQuery('md')} {
				font-size: 3.125rem;
				line-height: 3.75rem;
				letter-spacing: -0.225rem;
			}
		}

		@keyframes scroll {
			0% {
				transform: translateX(0); /* Start at the initial position */
			}
			100% {
				transform: translateX(-100%); /* Scroll the entire width */
			}
		}

		/* Pausing the animation on hover */
		&:hover .slider {
			animation-play-state: paused; /* Pauses the scroll on hover */
		}
	}
`;

// overflow: hidden;
// white-space: nowrap;
// width: 100%;

// > div {
// 	display: inline-flex;
// 	align-items: center;
// 	gap: 0.5rem;

// 	h1 {
// 		${({ theme }) => theme.fonts.syneFont}

// 		font-size: 5.25rem;
// 		font-weight: 700;
// 		line-height: 6.3rem;
// 		letter-spacing: -0.4rem;
// 		/* width: 50%; */
// 	}
// }
