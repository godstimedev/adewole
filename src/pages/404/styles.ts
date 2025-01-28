import styled from 'styled-components';
import { maxQuery } from '../../utilities';

export const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;

	h2 {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 2rem;
		${({ theme }) => theme.fonts.syneFont}

		${maxQuery('sm')} {
			flex-direction: column;
		}

		span {
			color: ${({ theme }) => theme.colors.primary500};
		}
	}

	> div {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
`;
