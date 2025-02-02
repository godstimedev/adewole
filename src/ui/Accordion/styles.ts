import styled from 'styled-components';
import { maxQuery } from '../../utilities';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	hr {
		border-top: 1.76px solid ${({ theme }) => theme.colors.white} !important;
		margin-right: 1.3rem;

		${maxQuery('sm')} {
			margin-right: 1rem;
		}
	}

	.accordion-item {
		position: relative;
		padding: 0 2rem;

		${maxQuery('md')} {
			padding: 0 1rem;
		}

		&::after {
			position: absolute;
			content: '';
			border: 1px solid ${({ theme }) => theme.colors.white};
			right: 21px;
			bottom: 0;
			height: 100%;

			${maxQuery('sm')} {
				position: absolute;
				content: '';
				border: 1px solid ${({ theme }) => theme.colors.white};
				right: 16px;
				bottom: 0;
				height: 100%;
			}
		}
	}

	> div {
		border-bottom: 1.76px solid ${({ theme }) => theme.colors.white};

		&.open {
			border-bottom: transparent;
		}
	}

	.toggle {
		position: absolute;
		right: 0;
		bottom: -1.35rem;
		z-index: 100;

		background-color: ${({ theme }) => theme.colors.white};
		width: 42px;
		min-height: 42px;
		border-radius: 50%;
		color: ${({ theme }) => theme.colors.black};

		${({ theme }) => theme.fonts.jostFont};
		font-size: 1.653125rem;
		font-weight: 400;
		line-height: 2.2rem;

		display: flex;
		align-items: center;
		justify-content: center;

		${maxQuery('sm')} {
			bottom: -1rem;

			font-size: 15.75px;
			font-weight: 400;
			line-height: 21px;
			border-radius: 100%;

			width: 32px;
			min-height: 32px;
		}
	}

	.accordion-header {
		${({ theme }) => theme.fonts.syneFont};

		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem 0;
		font-size: 1.25rem;
		font-weight: 700;
		line-height: 1.5rem;
		color: ${({ theme }) => theme.colors.white};

		${maxQuery('sm')} {
			font-size: 0.75rem;
			line-height: 0.9rem;
			padding: 1rem 0;
		}
	}

	.accordion-content {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.3s ease;
		padding-right: 1rem;
	}

	.accordion-content.open {
		max-height: max-content; /* You can adjust this value depending on the content size */
	}
`;
