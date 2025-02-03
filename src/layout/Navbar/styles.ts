import styled, { css } from 'styled-components';
import { maxQuery } from '../../utilities';

type StyledPropType = {
	$location?: string;
};

export const Container = styled.header<StyledPropType>`
	background: transparent;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	margin: auto;
	z-index: 1000;
	height: 8rem;
	display: flex;
	align-items: center;
	justify-content: center;

	${({ $location }) =>
		$location === 'default' &&
		css`
			background: ${({ theme }) => theme.colors.black};
		`}

	nav {
		max-width: 1440px;
		padding: 0 4rem;
		width: 100%;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;

		${maxQuery('md')} {
			padding: 0 1.5rem;
		}

		.logo {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		ul {
			display: flex;
			align-items: center;
			gap: 2rem;

			${maxQuery('lg')} {
				display: none;
			}

			li {
				text-transform: uppercase;

				&:hover {
					color: ${({ theme }) => theme.colors.primary500};
				}
			}
		}

		${({ $location }) =>
			$location === 'default' &&
			css`
				.back {
					display: none;
					visibility: hidden;
				}

				.menu {
					display: none;

					${maxQuery('lg')} {
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
			`}

		${({ $location }) =>
			$location === 'other' &&
			css`
				.back {
					display: block;
					background-color: ${({ theme }) => theme.colors.white};
					padding: 0.5rem;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				> ul {
					display: none;
					visibility: hidden;
				}

				.menu {
					display: block;
					background-color: ${({ theme }) => theme.colors.white};
					padding: 0.5rem;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;

					svg {
						path {
							fill: ${({ theme }) => theme.colors.black};
						}
					}
				}
			`}

		

		
		.mobile-nav {
			background-color: ${({ theme }) => theme.colors.black};
			position: fixed;
			top: 0;
			height: 100%;
			z-index: 1000;
			width: 100%;

			&.show {
				right: 0;
				transition: all 0.3s ease-in-out;
			}

			&.close {
				position: fixed;
				right: -100vw;
				transition: right 0.3s ease-in-out;
			}

			> div {
				max-width: 1440px;
				margin: auto;
				padding: 2rem 4rem;
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: start;
				gap: 5rem;

				${maxQuery('md')} {
					padding: 2rem 1.5rem;
				}

				> div {
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 100%;

					.menu {
						display: block;
						background-color: ${({ theme }) => theme.colors.white};
						padding: 0.5rem;
						border-radius: 50%;
						display: flex;
						align-items: center;
						justify-content: center;
					}
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
	}
`;
