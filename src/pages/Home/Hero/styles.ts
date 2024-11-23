import styled, { keyframes } from 'styled-components';
import { maxQuery } from '../../../utilities';

const rotate = keyframes`
	from {
		transform: rotate(0deg)
	}
	to {
		transform: rotate(360deg)
	}
`;

export const Container = styled.section`
	min-height: calc(100vh - 8rem);
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 6rem;

	${maxQuery('xl')} {
		flex-direction: column-reverse;

		gap: 2rem;
	}

	> div:first-child {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		> div {
			display: flex;
			gap: 2rem;

			${maxQuery('xl')} {
				flex-direction: column;
				align-items: center;
				/* gap: 4rem; */
				text-align: center;
			}

			> div {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				${maxQuery('xl')} {
					align-items: center;
				}

				h6 {
					${({ theme }) => theme.fonts.syneFont};

					font-size: 1.125rem;
					font-weight: 600;
					line-height: 108.89%;
					text-decoration-skip-ink: none;
					text-transform: uppercase;
				}

				span {
					font-size: 1.125rem;
					font-weight: 500;
					line-height: 98%;
					color: rgba(255, 255, 255, 0.6);
					text-transform: uppercase;

					display: flex;
					align-items: center;
					gap: 0.5rem;

					> .badge {
						padding: 0.5rem;
						border-radius: 50%;
						background-color: #5cf45c;
						opacity: 1 !important;
					}
				}
			}

			&:last-child {
				gap: 1rem;

				> a {
					&:hover {
						svg {
							scale: 1.1;
							transition: all 0.3s;

							path {
								fill: ${({ theme }) => theme.colors.primary500};
							}
						}
					}
				}
			}
		}

		h1 {
			${maxQuery('xl')} {
				text-align: center;
			}

			span {
				color: ${({ theme }) => theme.colors.primary500};
			}
		}

		p {
			color: ${({ theme }) => theme.colors.grey400};
			font-size: 1.5rem;
			font-weight: 400;
			line-height: 140%;

			${maxQuery('xl')} {
				text-align: center;
			}
		}
	}

	> div:last-child {
		position: relative;

		> div {
			width: 490px;
			height: 490px;

			${maxQuery('md')} {
				width: 100%;
				height: 100%;
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		span {
			position: absolute;
			bottom: -1rem;
			left: 0;

			> svg {
				animation: ${rotate} 10s infinite linear;
			}
		}
	}
`;
