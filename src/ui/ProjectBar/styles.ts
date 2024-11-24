import styled from 'styled-components';
import { maxQuery } from '../../utilities';

export const Container = styled.div`
	background-color: #f7f7f7;
	padding: 1rem 2rem;
	border-radius: 8px;
	height: 77px;
	display: flex;
	align-items: center;
	gap: 1rem;

	${maxQuery('md')} {
		padding: 1rem 1.5rem;
	}

	> div:first-child {
		width: 62.52px;
		height: 62.52px;

		${maxQuery('md')} {
			width: 34.46px;
			height: 34.46px;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	> div:last-child {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: space-between;
		height: 100%;

		h3 {
			${({ theme }) => theme.fonts.syneFont};

			display: flex;
			align-items: center;
			gap: 0.5rem;
			color: black;
			font-size: 1.1rem;
			font-weight: 600;
			line-height: 1.32875rem;

			${maxQuery('md')} {
				font-size: 0.61rem;
				font-weight: 600;
				line-height: 0.7325rem;
				letter-spacing: -0.01876768656075rem;
			}

			span {
				text-transform: capitalize;
				color: #808080;
			}
		}

		ul {
			display: flex;
			gap: 1rem;
			color: #333;

			li {
				font-size: 0.7rem;
				font-weight: 500;
				line-height: 1.07rem;
				letter-spacing: -0.0136rem;

				${maxQuery('md')} {
					font-size: 0.395rem;
					font-weight: 500;
					line-height: 0.59rem;
					letter-spacing: -0.007515763398259878rem;
				}
			}
		}
	}
`;
