import styled from 'styled-components';
import { maxQuery } from '../../../utilities';
import { OpenBodyBg1, OpenBodyBg2 } from '../../../assets/images';

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
			border-radius: 0;
			padding: 3rem 1.5rem;
		}

		/* section 1 */
		> div:first-child {
			display: flex;
			flex-direction: column;
			gap: 4rem;

			${maxQuery('sm')} {
				gap: 3.5rem;
			}

			h2 {
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
				background-image: url(${OpenBodyBg1});
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
						max-width: 701px;
						height: 500px;

						img {
							width: 100%;
							height: 100%;
						}

						${maxQuery('md')} {
							display: none;
						}
					}

					&:first-child {
						max-width: 229px;
						height: 496px;

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

		/* section 2 */
		> div:nth-child(2) {
			display: flex;
			flex-direction: column;
			gap: 6rem;

			${maxQuery('sm')} {
				gap: 4rem;
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
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 4rem;

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

				> div {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(560px, 1fr));
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
						gap: 1rem;

						h3 {
							font-size: 1.665625rem;
							font-weight: 600;
							line-height: 1.541875rem;
							letter-spacing: -0.051387rem;
							text-align: left;
							text-transform: uppercase;

							${maxQuery('sm')} {
								font-size: 1.125rem;
								line-height: 1.542rem;
								letter-spacing: -0.0514rem;
								text-align: center;
							}
						}

						p {
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
					}
				}
			}
		}

		> div:nth-child(3) {
			display: flex;
			flex-direction: column;
			gap: 4rem;

			> div:first-child {
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

				h3 {
					font-size: 2rem;
					font-weight: 600;
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

				> div {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
					gap: 3.5rem;
					background-color: #fafafa;
					padding: 3.5rem;

					${maxQuery('md')} {
						grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
						gap: 2rem;
						padding: 1.5rem;
					}

					> div {
						display: flex;
						flex-direction: column;
						gap: 1rem;
					}

					ul {
						padding-left: 2rem;
						display: flex;
						flex-direction: column;
						gap: 1rem;

						${maxQuery('md')} {
							padding-left: 1rem;
						}

						${maxQuery('md')} {
							padding-right: 0;
						}
						li {
							list-style-type: disc;
							color: #000;
							font-size: 20px;
							font-weight: 400;
							line-height: 24px;
							text-align: justify;

							${maxQuery('sm')} {
								font-size: 20px;
								line-height: 20.4px;
							}
						}
					}
				}
			}

			> div:last-child {
				height: 690px;
				border-radius: 10.33px;
				background-image: url(${OpenBodyBg2});
				background-position: center;
				background-size: cover;
				background-repeat: no-repeat;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 2rem;
				padding: 1rem;

				${maxQuery('md')} {
					display: none;
				}
			}
		}

		.section-4 {
			display: flex;
			flex-direction: column;
			gap: 6rem;

			> div:first-child {
				display: flex;
				flex-direction: column;
				gap: 4rem;

				${maxQuery('md')} {
					gap: 2rem;
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

				> div {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
					background-color: #fafafa;
					gap: 3rem;
					padding: 3.5rem;

					${maxQuery('md')} {
						grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
						gap: 2rem;
						padding: 2rem;
					}

					> div {
						display: flex;
						align-items: center;
						gap: 1rem;

						svg {
							min-width: 70px;
							height: 70px;
						}

						p {
							font-size: 20px;
							font-weight: 400;
							line-height: 22.1px;
							letter-spacing: -0.02em;
							color: #101010;
						}
					}
				}
			}

			> div:nth-child(2) {
				display: flex;
				flex-direction: column;
				gap: 4rem;

				> div:first-child {
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
				}

				.segmentation {
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

						> div {
							display: flex;
							flex-direction: column;
							gap: 1rem;
							align-items: left;

							h4 {
								font-size: 24px;
								font-weight: 700;
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

					> div:last-child {
						display: flex;
						flex-direction: column;
						gap: 4rem;
						align-items: start;

						h3 {
							text-align: center;
							align-self: center;
						}

						h4 {
							text-transform: uppercase;
						}

						> div {
							display: flex;
							flex-direction: column;
							gap: 4rem;
							align-items: start;

							> div {
								display: flex;
								flex-direction: column;
								gap: 1rem;
								align-items: start;

								padding-right: 3rem;

								${maxQuery('md')} {
									padding-right: 1rem;
								}

								> div {
									display: flex;
									align-items: center;
									gap: 2rem;
								}
							}
						}
					}
				}
			}
		}

		> div:last-child {
			display: flex;
			flex-direction: column;
			gap: 5rem;

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
					max-width: 1147px;
					height: 668px;
					margin: auto;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}

				.images {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(590px, 1fr));
					gap: 2rem;

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
		}
	}
`;
