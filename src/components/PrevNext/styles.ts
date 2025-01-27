import styled from 'styled-components';
import { maxQuery } from '../../utilities';

type StyledProps = {
	$next: number | null;
	$prev: number | null;
};

export const Container = styled.div<StyledProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	margin: 0 4rem;

	${maxQuery('md')} {
		flex-direction: column;
	}

	.prev,
	.next {
		svg {
			width: 100px;
			height: 100px;
		}
	}

	.prev {
		${({ $prev }) => $prev === null && 'visibility: hidden;'}
	}

	.next {
		${({ $next }) => $next === null && 'visibility: hidden;'}
	}

	> div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		max-width: 714px;

		h6 {
			color: #000000;
			font-size: 24px;
			font-weight: 400;
			line-height: 120%;
			text-align: center;
			text-transform: uppercase;
		}

		img {
			width: 200px;
			height: 100%;
			object-fit: cover;
		}

		p {
			color: #6f6e6e;

			font-size: 24px;
			font-weight: 300;
			line-height: 120%;
			text-align: center;
		}
	}
`;
