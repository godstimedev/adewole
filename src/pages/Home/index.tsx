import { useEffect } from 'react';
import { ScrollToTop } from '../../utilities';
import Clients from './Clients';
import Hero from './Hero';
import Projects from './Projects';
import Resume from './Resume';
import { Container } from './styles';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
	const { hash } = useLocation();

	useEffect(() => {
		if (hash) {
			const element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [hash]);

	return (
		<Container>
			<Hero />
			<Projects />
			<Clients />
			<Resume />
			<ScrollToTop />
		</Container>
	);
};

export default HomePage;
