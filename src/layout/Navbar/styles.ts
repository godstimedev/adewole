import styled from 'styled-components';
import { maxQuery } from '../../utilities';

export const Container = styled.header`
	background: transparent;
	position: relative;
	width: 100%;
	margin: auto;
	z-index: 1000;
	height: 8rem;
	padding: 0 4rem;
	display: flex;
	align-items: center;
	justify-content: center;

	${maxQuery('md')} {
		padding: 0 1.5rem;
	}

	nav {
		max-width: 1440px;
		width: 100%;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;

		ul {
			display: flex;
			align-items: center;
			gap: 2rem;

			${maxQuery('md')} {
				display: none;
			}

			li {
				text-transform: uppercase;

				&:hover {
					color: ${({ theme }) => theme.colors.primary500};
				}
			}
		}

		.menu {
			display: none;

			${maxQuery('md')} {
				display: block;
				background-color: ${({ theme }) => theme.colors.white};
				padding: 0.5rem;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			> svg {
				path {
					fill: ${({ theme }) => theme.colors.black};
				}
			}
		}

		.show {
			z-index: 1000;

			position: fixed;
			right: 0;
			transition: all 0.3s ease-in-out;
		}

		.close {
			position: fixed;
			right: -100vw;
			transition: right 0.3s ease-in-out;
			z-index: 20;
		}
		.mobile-nav {
			background-color: ${({ theme }) => theme.colors.black};
			top: 0;
			padding: 2rem 1.5rem;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: start;
			gap: 5rem;
			z-index: 1000;

			> div {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
			}

			> ul {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: start;
				gap: 2rem;

				> button {
					margin-top: 2rem;
				}
			}
		}
	}
`;
