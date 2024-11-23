import styled from 'styled-components';

export const Container = styled.section`
	margin-bottom: 10rem;
	display: flex;
	flex-direction: column;
	gap: 3rem;

	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(569px, 1fr));
		gap: 2rem;
	}
`;
