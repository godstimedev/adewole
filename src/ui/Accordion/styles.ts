import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	.accordion-item {
		position: relative;
		padding: 0 2rem;

		&::after {
			position: absolute;
			content: '';
			border: 1px solid ${({ theme }) => theme.colors.white};
			right: 21px;
			bottom: 0;
			height: 100%;
		}
	}

	> div:first-child {
		border-top: 1px solid ${({ theme }) => theme.colors.white};
	}

	> div {
		border-bottom: 1px solid ${({ theme }) => theme.colors.white};
	}

	.toggle {
		position: absolute;
		right: 0;
		top: -1.5rem;
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
	/* .accordion-content p {
		padding: 0 0 1rem;
		font-size: 12px;
		font-weight: 400;
		line-height: 15.84px;
		color: ${({ theme }) => theme.colors.accent200};
	} */
`;
