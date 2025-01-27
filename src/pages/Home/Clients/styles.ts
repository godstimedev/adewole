import styled from 'styled-components';
import { maxQuery } from '../../../utilities';

export const Container = styled.section`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	scroll-margin-top: 2rem;

	${maxQuery('md')} {
		gap: 2rem;
	}

	.clients {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
		gap: 2rem;

		${maxQuery('sm')} {
			grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
		}
	}
`;
