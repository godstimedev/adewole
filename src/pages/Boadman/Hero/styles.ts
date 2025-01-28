import styled from 'styled-components';
import { maxQuery } from '../../../utilities';

export const Container = styled.section`
	height: 1076.84px;
	background-color: #171a23;
	padding-top: 8rem;

	display: flex;
	flex-direction: column;
	gap: 2rem;

	${maxQuery('md')} {
		gap: 4rem;
	}

	> div:first-child {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3rem;
		padding: 1rem;

		.img-con {
			&:last-child {
				position: relative;
				max-width: 793px;
				height: 563.91px;

				.vector {
					position: absolute;
					z-index: 1;
					right: -9rem;
					top: -8rem;
					width: 545.03px;
					height: 547.69px;
				}

				.main {
					position: relative;
					width: 100%;
					height: 100%;
					z-index: 2 !important;
				}

				${maxQuery('md')} {
					display: none;
				}
			}

			&:first-child {
				position: relative;
				max-width: 207px;
				height: 447.97px;

				.vector {
					position: absolute;
					z-index: 1;
					bottom: -9rem;
					left: 50%;
					transform: translateX(-50%);
					width: 446.01px;
					height: 448.19px;
				}

				.main {
					position: relative;
					width: 100%;
					height: 100%;
					z-index: 2 !important;
				}

				${maxQuery('lg')} {
					display: none;
				}

				${maxQuery('md')} {
					display: block;
				}
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
