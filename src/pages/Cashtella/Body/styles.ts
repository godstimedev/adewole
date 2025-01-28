import styled from 'styled-components';
import { maxQuery } from '../../../utilities';
import { BoadmanBodyBg1 } from '../../../assets/images';

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
				background-image: url(${BoadmanBodyBg1});
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
						max-width: 689px;
						height: 490px;

						img {
							width: 100%;
							height: 100%;
						}

						${maxQuery('md')} {
							display: none;
						}
					}

					&:last-child {
						max-width: 220px;
						height: 457px;

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

			> div:last-child {
				/* position: relative; */

				.img-wrapper {
					display: flex;
					align-items: center;
					justify-content: space-between;
					gap: 2rem;

					${maxQuery('lg')} {
						display: none;
					}

					.img-con-1 {
						width: 900.42px;
						height: 1010px;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
							border-radius: 24px 0px 0px 0px;
						}
					}

					.img-con-2 {
						width: 200px;
						height: 818px;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
							border-radius: 24px 0px 0px 0px;
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
							width: 296px;
							height: 487px;

							img {
								width: 100%;
								height: 100%;
								object-fit: cover;
							}
						}

						&:last-child {
							width: 296px;
							height: 848px;

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

			> div:last-child {
				/* position: relative; */

				.img-wrapper {
					display: flex;
					justify-content: space-between;
					gap: 2rem;

					${maxQuery('lg')} {
						display: none;
					}

					.img-con-1 {
						width: 262.73px;
						height: 547.01px;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}

					.img-con-2 {
						width: 262.73px;
						height: 547.01px;
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
							width: 295px;
							height: 614.21px;

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

		> div:nth-child(4) {
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

			> div:last-child {
				/* position: relative; */

				.img-wrapper {
					display: flex;
					flex-direction: column;
					gap: 6rem;

					${maxQuery('lg')} {
						display: none;
					}

					> div:first-child {
						width: 1199.53px;
						height: 853px;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
							border-radius: 15.39px;
						}
					}

					> div:last-child {
						display: flex;
						justify-content: space-between;
						gap: 2rem;

						.img-con-1 {
							width: 262.73px;
							height: 547.01px;

							img {
								width: 100%;
								height: 100%;
								object-fit: cover;
							}
						}

						.img-con-2 {
							width: 262.73px;
							height: 547.01px;
							margin-top: 6rem;

							img {
								width: 100%;
								height: 100%;
								object-fit: cover;
							}
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
							width: 295px;
							height: 614.21px;

							img {
								width: 100%;
								height: 100%;
								object-fit: cover;
							}
						}

						&:last-child {
							width: 295px;
							height: 614.99px;

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

		> div:last-child {
			display: flex;
			flex-direction: column;

			${maxQuery('lg')} {
				gap: 2rem;
				display: none;
			}

			> .img-con {
				width: 1198px;
				height: 855.24px;

				margin: auto;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					border-radius: 15px 0px 0px 0px;
				}
			}
		}
	}
`;
