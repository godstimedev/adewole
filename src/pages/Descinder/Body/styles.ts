import styled from 'styled-components';
import { maxQuery } from '../../../utilities';
import { DescinderBodyBg1, DescinderBodyBg2 } from '../../../assets/images';

export const Container = styled.section`
	min-height: 100vh;
	padding: 6rem 4rem;
	color: ${({ theme }) => theme.colors.black};
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 100px 100px 0 0;
	margin-top: -150px;
	display: flex;
	flex-direction: column;
	gap: 6rem;

	${maxQuery('sm')} {
		border-radius: 0;
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
			font-size: 2rem;
			font-weight: 400;
			line-height: 2.5rem;
			letter-spacing: -0.05rem;
			color: #1c1d20;
			max-width: 867px;
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
					${({ theme }) => theme.fonts.syneFont}
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
			background-image: url(${DescinderBodyBg1});
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
					max-width: 881px;
					height: 572.83px;

					img {
						width: 100%;
						height: 100%;
					}

					${maxQuery('md')} {
						display: none;
					}
				}

				&:last-child {
					max-width: 222.14px;
					height: 481px;

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
				${({ theme }) => theme.fonts.syneFont}
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
				${({ theme }) => theme.fonts.syneFont}
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
					${({ theme }) => theme.fonts.syneFont}

					font-size: 1.665625rem;
					font-weight: 600;
					line-height: 1.541875rem;
					letter-spacing: -0.051387rem;
					text-align: left;

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

				.flow {
					background-color: #f6f6f6;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 0.75rem 0.5rem;

					span {
						${({ theme }) => theme.fonts.syneFont};
						font-size: 1.125rem;
						font-weight: 700;
						line-height: 2.379rem;
						letter-spacing: -0.0476rem;
						text-align: center;

						${maxQuery('sm')} {
							font-size: 16px;
							line-height: 24px;
							letter-spacing: -0.7612912058830261px;
							text-align: center;
						}
					}
				}
			}
		}
	}

	> div:nth-child(3) {
		height: 690px;
		border-radius: 10.33px;
		background-image: url(${DescinderBodyBg2});
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
				max-width: 881px;
				height: 572.83px;

				img {
					width: 100%;
					height: 100%;
				}

				${maxQuery('md')} {
					display: none;
				}
			}

			&:first-child {
				max-width: 222.14px;
				height: 481px;

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
		flex-direction: column;
		gap: 4rem;

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
				${({ theme }) => theme.fonts.syneFont}
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
		}
	}
`;
