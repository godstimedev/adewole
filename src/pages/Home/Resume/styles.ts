import styled from 'styled-components';
import { maxQuery } from '../../../utilities';

export const Container = styled.section`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	margin-bottom: 4rem;

	${maxQuery('md')} {
		gap: 3rem;
	}

	.resume {
		display: flex;
		justify-content: space-between;
		gap: 4rem;

		${maxQuery('lg')} {
			flex-direction: column;
		}

		> div {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2rem;

			h3 {
				${({ theme }) => theme.fonts.syneFont};
				font-size: 1.5rem;
				font-weight: 700;
				line-height: 1.3225rem;

				${maxQuery('sm')} {
					font-size: 16px;
					font-weight: 700;
					line-height: 12.56px;
				}
			}
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-bottom: 2rem;
		width: 100%;

		${maxQuery('sm')} {
			padding-bottom: 1.5rem;
			gap: 0.5rem;
		}

		> div {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 2rem;

			h5 {
				font-size: 1.25rem;
				font-weight: 700;
				line-height: 2.2rem;

				${maxQuery('sm')} {
					font-size: 12px;
					font-weight: 700;
					line-height: 21px;
				}
			}

			span {
				${({ theme }) => theme.fonts.syneFont};
				font-size: 1rem;
				font-weight: 700;
				line-height: 2.5rem;
				letter-spacing: 0.035rem;

				&.present {
					color: ${({ theme }) => theme.colors.primary500};
				}

				${maxQuery('sm')} {
					font-size: 10px;
					line-height: 24.15px;
					letter-spacing: 0.34px;
				}
			}
		}

		p {
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5rem;
			color: #777777;

			${maxQuery('sm')} {
				font-size: 10px;
				font-weight: 400;
				line-height: 14.28px;
			}
		}
	}
`;
