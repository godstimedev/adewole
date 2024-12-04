import styled from 'styled-components';
import { maxQuery } from '../../utilities';

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.black};
	display: flex;
	flex-direction: column;
	gap: 4rem;
	padding: 0 4rem 4rem;
	margin-top: 8rem;
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;

	${maxQuery('lg')} {
		padding: 0 3rem;
	}
	${maxQuery('md')} {
		padding: 0 2rem;
	}
`;
