import styled from 'styled-components';
import { maxQuery } from '../../../utilities';

export const Container = styled.section`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;

	${maxQuery('md')} {
		gap: 2rem;
	}

	.resume {
		display: flex;
		/* align-items: center; */
		justify-content: space-between;
		gap: 3rem;

		${maxQuery('md')} {
			flex-direction: column;
			gap: 2rem;
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
			}
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-bottom: 2rem;

		> div {
			display: flex;
			align-items: center;
			justify-content: space-between;

			h5 {
				font-size: 1.25rem;
				font-weight: 700;
				line-height: 2.2rem;
			}

			span {
				${({ theme }) => theme.fonts.syneFont};
				font-size: 1rem;
				font-weight: 700;
				line-height: 2.5rem;
				letter-spacing: 0.035rem;
			}
		}

		p {
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5rem;
			color: #777777;
		}
	}
`;
