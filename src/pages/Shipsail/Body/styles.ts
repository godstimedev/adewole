import styled from 'styled-components';
import { maxQuery } from '../../../utilities';
import { ShipsailBodyBg1 } from '../../../assets/images';

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
				font-weight: 400 !important;
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
						font-weight: 500;
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
				background-image: url(${ShipsailBodyBg1});
				background-position: center;
				background-size: cover;
				background-repeat: no-repeat;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 3rem;
				padding: 1rem;
				padding-top: 4rem;

				${maxQuery('lg')} {
					height: 596px;
					padding-top: 1rem;
				}

				.img-con-1 {
					width: 238.49px;
					height: 515.14px;

					${maxQuery('lg')} {
						width: 216.13px;
						height: 468px;
					}

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						border-radius: 6px 0px 0px 0px;
					}

					&:first-child {
						${maxQuery('lg')} {
							display: none;
						}
					}
				}

				.img-con-2 {
					width: 238.49px;
					height: 515.14px;

					margin-bottom: 6rem;

					${maxQuery('lg')} {
						display: none;
					}

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						border-radius: 7px;
					}
				}
			}
		}

		> div:nth-child(2) {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 3rem;

			> div:first-child {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 1rem;
			}

			h2 {
				font-size: 2.5rem;
				font-weight: 500;
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

			> div:last-child {
				.img-wrapper {
					display: flex;
					justify-content: space-between;
					gap: 2rem;

					${maxQuery('lg')} {
						display: none;
					}

					.img-con-1 {
						width: 254.09px;
						height: 550.19px;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}

					.img-con-2 {
						width: 254.09px;
						height: 550.19px;

						margin-top: 6rem;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}
				}

				.img-wrapper-mobile {
					display: none;

					${maxQuery('lg')} {
						display: flex;
						flex-direction: column;
						align-items: center;
						gap: 2rem;
					}

					.img-con {
						&:first-child {
							width: 282.17px;
							height: 611px;

							img {
								width: 100%;
								height: 100%;
								object-fit: cover;
							}
						}

						&:last-child {
							width: 294.89px;
							height: 613.99px;

							img {
								width: 100%;
								height: 100%;
								object-fit: cover;
							}
						}
					}
				}
			}
		}

		> div:nth-child(3) {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 3rem;

			> div:first-child {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 1rem;
			}

			h2 {
				font-size: 2.5rem;
				font-weight: 500;
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

			.img-wrapper {
				height: 690px;
				width: 100%;
				background-image: url(${ShipsailBodyBg1});
				background-position: center;
				background-size: cover;
				background-repeat: no-repeat;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 1rem;
				padding: 1rem;

				.img-con-1 {
					width: 221.01px;
					height: 478.57px;

					${maxQuery('lg')} {
						display: none;
					}

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						border-radius: 7.5px;
					}
				}

				.img-con-2 {
					width: 221.01px;
					height: 478.57px;
					margin-top: 6rem;

					${maxQuery('lg')} {
						width: 216.13px;
						height: 468px;
					}

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						border-radius: 7.5px;
					}

					&.non {
						${maxQuery('lg')} {
							display: none !important;
						}
					}
				}
			}
		}
	}
`;
