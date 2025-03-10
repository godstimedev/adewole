import styled from 'styled-components';
import { maxQuery } from '../../utilities';

export const Container = styled.div`
	padding: 1.5rem 1.5rem 2rem;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 1.5rem;

	img {
		width: 100%;
		height: 225px;
		object-fit: cover;
		border-radius: 1rem;
	}

	> div {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;

		${maxQuery('md')} {
			align-items: center;
		}

		> div {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;

			${maxQuery('md')} {
				align-items: center;
			}

			span {
				${({ theme }) => theme.fonts.jostFont};
				color: ${({ theme }) => theme.colors.primary500};

				font-size: 1rem;
				font-weight: 700;
				line-height: 1.29625rem;
				letter-spacing: 0.038rem;
				text-transform: uppercase;
				-webkit-text-stroke: 0.5px #808080e3;
				/* text-stroke: 0.5px #808080e3; */

				${maxQuery('sm')} {
					font-size: 0.84rem;
					line-height: 1.08875rem;
					letter-spacing: 0.032rem;
				}
			}

			h3 {
				${({ theme }) => theme.fonts.syneFont};

				font-size: 1.5rem;
				font-weight: 700;
				line-height: 2rem;
				color: ${({ theme }) => theme.colors.black};
				text-transform: uppercase;

				${maxQuery('sm')} {
					font-size: 1.26rem;
					line-height: 1.68rem;
				}
			}
		}

		p {
			color: #262626;
			font-size: 0.938125rem;
			font-weight: 400;
			line-height: 1.5rem;

			${maxQuery('md')} {
				text-align: center;
			}

			${maxQuery('sm')} {
				font-size: 0.788125rem;
				font-weight: 400;
				line-height: 1.26rem;
			}
		}
	}

	a {
		margin-left: auto;
		margin-top: auto;

		button {
			${({ theme }) => theme.fonts.syneFont};

			display: flex;
			align-items: center;
			justify-content: end;
			gap: 0.5rem;
			text-decoration: underline;

			font-size: 0.938125rem;
			font-weight: 700;
			line-height: 1.29rem;

			${maxQuery('md')} {
				margin: auto;
			}

			${maxQuery('sm')} {
				font-size: 0.788125rem;
				line-height: 1.08375rem;
			}

			&:hover {
				color: ${({ theme }) => theme.colors.primary700};

				transition: all 0.1s;
			}
		}
	}
`;
