import styled from 'styled-components';
import { maxQuery } from '../../../utilities';
import { DotBodyBg1, DotBodyBg2 } from '../../../assets/images';

export const Container = styled.section`
	min-height: 100vh;
	color: ${({ theme }) => theme.colors.black};
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 100px 100px 0 0;
	margin-top: -150px;

	${maxQuery('sm')} {
		border-radius: 0;
	}

	.wrapper {
		max-width: 1440px;
		padding: 6rem 4rem;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: column;
		gap: 7rem;

		${maxQuery('sm')} {
			padding: 3rem 1.5rem;
		}

		> div:first-child {
			display: flex;
			flex-direction: column;
			gap: 4rem;

			${maxQuery('sm')} {
				gap: 3.5rem;
			}

			h2 {
				/* ${({ theme }) => theme.fonts.kanitFont} */
				font-size: 2rem;
				font-weight: 400;
				line-height: 2.5rem;
				letter-spacing: -0.05rem;
				color: #1c1d20;
				max-width: 1019px;
				text-align: center;
				margin: auto;

				${maxQuery('sm')} {
					font-size: 24px;
					line-height: 30px;
					letter-spacing: -0.800000011920929px;
				}
			}

			.middle {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(376px, 1fr));
				gap: 2.5rem;

				${maxQuery('sm')} {
					display: flex;
					flex-direction: column;
					gap: 2.5rem;
					margin: auto;
					max-width: 276px;
					/* padding: 0 1rem; */
				}

				> div:not(:last-child) {
					border-right: 1px solid #1e1e1e;

					${maxQuery('lg')} {
						border-right: none;
					}

					${maxQuery('sm')} {
						border-right: none;
						border-bottom: 1px solid #1e1e1e;
						padding-bottom: 2.5rem;
					}
				}

				> div {
					display: flex;
					flex-direction: column;
					gap: 1rem;

					${maxQuery('md')} {
						align-items: center;
						text-align: center;
					}

					h3 {
						${({ theme }) => theme.fonts.kanitFont}
						font-size: 1.5rem;
						font-weight: 700;
						line-height: 2.1rem;
						text-transform: uppercase;

						${maxQuery('sm')} {
							font-size: 20px;
							line-height: 28px;
						}
					}

					ul {
						padding-left: 2rem;
						li {
							list-style-type: disc;
							color: #6f6e6e;
							font-size: 1.5rem;
							font-weight: 400;
							line-height: 2.1rem;

							${maxQuery('sm')} {
								font-size: 20px;
								line-height: 29.4px;
							}
						}
					}
					p {
						color: #6f6e6e;
						font-size: 1.5rem;
						font-weight: 400;
						line-height: 2.1rem;

						${maxQuery('sm')} {
							font-size: 20px;
							line-height: 29.4px;
						}
					}
				}
			}

			.img-wrapper {
				height: 690px;
				border-radius: 10.33px;
				background-image: url(${DotBodyBg1});
				background-position: center;
				background-size: cover;
				background-repeat: no-repeat;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 2rem;
				padding: 1rem;

				.img-con {
					&:last-child {
						max-width: 752px;
						height: 535px;

						img {
							width: 100%;
							height: 100%;
						}

						${maxQuery('md')} {
							display: none;
						}
					}

					&:first-child {
						max-width: 188px;
						height: 394px;

						img {
							width: 100%;
							height: 100%;
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
				gap: 3rem;

				${maxQuery('md')} {
					flex-direction: column;
					align-items: center;
				}

				> div {
					display: flex;
					flex-direction: column;
					gap: 1.5rem;
				}

				h3 {
					${({ theme }) => theme.fonts.kanitFont}
					font-size: 2rem;
					font-weight: 500;
					line-height: 1.62rem;
					letter-spacing: -0.054rem;
					text-transform: uppercase;

					${maxQuery('sm')} {
						font-size: 20px;
						line-height: 25.92px;
						letter-spacing: -0.8640000224113464px;
						text-align: center;
					}
				}

				p {
					font-size: 1.25rem;
					font-weight: 400;
					line-height: 1.5rem;
					text-align: justify;
					color: #6f6e6e;

					${maxQuery('sm')} {
						font-size: 20px;
						font-weight: 400;
						line-height: 24px;
						text-align: center;
					}
				}
			}
		}

		> div:nth-child(2) {
			display: flex;
			flex-direction: column;
			gap: 3rem;

			${maxQuery('sm')} {
				gap: 2rem;
			}

			> div:first-child {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 3rem;

				h2 {
					font-size: 2.5rem;
					font-weight: 700;
					line-height: 2.37875rem;
					letter-spacing: -0.04758rem;
					text-align: center;

					${maxQuery('sm')} {
						font-size: 28px;
						line-height: 28px;
						letter-spacing: -0.7612912058830261px;
						text-align: center;
					}
				}

				p {
					${({ theme }) => theme.fonts.syneFont}
					font-size: 20px;
					font-weight: 400;
					line-height: 22.84px;
					text-align: center;
					max-width: 967px;
					margin: auto;
				}

				.img-con {
					max-width: 965px;

					${maxQuery('sm')} {
						display: none;
					}

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
				.img-con-mobile {
					display: none;

					${maxQuery('sm')} {
						display: block;
						max-width: 200px;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}
				}
			}

			> div:last-child {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(585px, 1fr));
				gap: 2.5rem;

				${maxQuery('sm')} {
					display: flex;
					flex-direction: column;
					gap: 2rem;
					margin: auto;
					max-width: 305px;
					/* padding: 0 1rem; */
				}

				> div {
					display: flex;
					flex-direction: column;
					gap: 4rem;
					background-color: #fafafa;
					padding: 4rem 2rem;

					h3 {
						font-size: 32px;
						font-weight: 700;
						line-height: 38.06px;
						letter-spacing: -0.7612912058830261px;
						text-align: center;
						text-transform: uppercase;

						${maxQuery('sm')} {
							font-size: 1.125rem;
							line-height: 1.542rem;
							letter-spacing: -0.0514rem;
							text-align: center;
						}
					}

					p {
						${({ theme }) => theme.fonts.syneFont};
						font-size: 1.25rem;
						font-weight: 400;
						line-height: 1.4275rem;
						text-align: justify;
						color: rgba(0, 0, 0, 0.7);

						${maxQuery('sm')} {
							font-size: 16px;
							line-height: 22.84px;
							text-align: center;
						}
					}

					.center {
						text-align: center;
					}

					.chart {
						width: 189.24px;
						height: 189.24px;
						object-fit: cover;
						margin: auto;
					}
					.chart-dets {
						width: 163.5px;
						height: 133.1px;
						object-fit: cover;
						margin: 4rem auto 0;
					}

					> div {
						display: flex;
						flex-direction: column;
						gap: 1rem;
						align-items: left;

						h4 {
							/* ${({ theme }) => theme.fonts.syneFont} */
							font-size: 24px;
							font-weight: 500;
							line-height: 26.52px;
							text-align: center;
						}

						> div {
							display: flex;
							align-items: center;
							justify-content: start;
							gap: 1rem;

							img {
								height: 60px;
								object-fit: cover;
							}
						}

						ul {
							padding-left: 2rem;
							padding-right: 5rem;

							${maxQuery('md')} {
								padding-right: 0;
							}
							li {
								${({ theme }) => theme.fonts.syneFont}
								list-style-type: disc;
								color: #222222;
								font-size: 20px;
								font-weight: 400;
								line-height: 30px;

								${maxQuery('sm')} {
									font-size: 20px;
									line-height: 29.4px;
								}
							}
						}
					}
				}
			}
		}

		> div:nth-child(3) {
			height: 690px;
			border-radius: 10.33px;
			background-image: url(${DotBodyBg2});
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 2rem;
			padding: 1rem;

			.img-con {
				&:first-child {
					max-width: 755px;
					height: 537px;

					img {
						width: 100%;
						height: 100%;
					}

					${maxQuery('md')} {
						display: none;
					}
				}

				&:last-child {
					max-width: 188px;
					height: 393px;

					img {
						width: 100%;
						height: 100%;
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

		.persona {
			display: flex;
			flex-direction: column;
			gap: 2rem;

			h2 {
				font-size: 2.5rem;
				font-weight: 700;
				line-height: 2.37875rem;
				letter-spacing: -0.04758rem;
				text-align: center;
				text-transform: uppercase;

				${maxQuery('sm')} {
					font-size: 28px;
					line-height: 28px;
					letter-spacing: -0.7612912058830261px;
					text-align: center;
				}
			}

			p {
				font-size: 1.25rem;
				font-weight: 400;
				line-height: 1.4275rem;
				text-align: center;
				max-width: 967px;
				margin: auto;
			}

			> div {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(590px, 1fr));
				gap: 2rem;

				${maxQuery('md')} {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
					gap: 2rem;
				}

				h6 {
					/* ${({ theme }) => theme.fonts.syneFont} */

					color: #055445;
					font-size: 18.48px;
					font-weight: 700;
					line-height: 25.87px;
					text-transform: uppercase;
					display: flex;
					align-items: center;
				}

				p {
					font-size: 18px;
					font-weight: 400;
					line-height: 20.14px;
					text-align: left;
					color: #333333;
				}

				span {
					/* ${({ theme }) => theme.fonts.syneFont} */
					text-transform: uppercase;
					font-size: 14px;
					font-weight: 700;
					line-height: 19.6px;
					color: #828282;
				}

				> div {
					background-color: #fafafa;
					padding: 3rem 2.5rem;
					display: flex;
					flex-direction: column;
					gap: 1.5rem;

					ul {
						padding-left: 1.5rem;
						display: flex;
						flex-direction: column;
						gap: 0.5rem;

						li {
							list-style-type: disc;
							font-size: 18px;
							font-weight: 400;
							line-height: 20.14px;
							text-align: left;
							color: #333333;
						}
					}

					> div:first-child {
						display: flex;
						align-items: center;
						justify-content: space-between;
						gap: 2rem;

						${maxQuery('sm')} {
							display: flex;
							align-items: center;
							justify-content: space-between;
							gap: 0.5rem;
							flex-wrap: wrap;
						}

						h6 {
							font-size: 15.91px;
							line-height: 17.8px;
						}

						> div:first-child {
							display: flex;
							align-items: center;
							gap: 0.75rem;
						}
					}

					> div:nth-child(2) {
						display: flex;
						flex-direction: column;
						gap: 0.5rem;
					}
					> div:last-child {
						display: flex;
						flex-direction: column;
						gap: 0.5rem;
					}
				}
			}
		}

		> div:last-child {
			display: flex;
			flex-direction: column;
			gap: 6rem;

			${maxQuery('md')} {
				gap: 2rem;
				display: none;
			}

			> div {
				display: flex;
				flex-direction: column;
				gap: 2rem;

				${maxQuery('sm')} {
					gap: 1rem;
				}

				h2 {
					font-size: 2.5rem;
					font-weight: 700;
					line-height: 2.37875rem;
					letter-spacing: -0.04758rem;
					text-align: center;
					text-transform: uppercase;

					${maxQuery('sm')} {
						font-size: 28px;
						line-height: 28px;
						letter-spacing: -0.7612912058830261px;
						text-align: center;
					}
				}

				h3 {
					/* ${({ theme }) => theme.fonts.syneFont} */
					font-size: 28px;
					font-weight: 700;
					line-height: 22.84px;
					text-align: center;

					${maxQuery('sm')} {
						font-size: 20px;
						line-height: 20px;
						letter-spacing: -0.7612912058830261px;
						text-align: center;
					}
				}

				p {
					font-size: 1.25rem;
					font-weight: 400;
					line-height: 1.4275rem;
					text-align: center;
					max-width: 967px;
					margin: auto;
				}

				> div {
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}

				> .img-con {
					max-width: 1179px;
					height: 749px;
					margin: auto;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}

				.design-component {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
					gap: 2rem;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
			}
			.dot-pay {
				max-width: 460.25px;
				height: 302px;
				margin: auto;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	}
`;
