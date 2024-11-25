import styled from 'styled-components';
import { maxQuery } from '../../utilities';

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;

	> section {
		padding: 0 4rem 4rem;

		${maxQuery('lg')} {
			padding: 0 3rem 4rem;
		}
		${maxQuery('md')} {
			padding: 0 2rem 4rem;
		}
	}
`;
