import { ScrollToTop } from '../../utilities';
import Clients from './Clients';
import Hero from './Hero';
import Projects from './Projects';
import Resume from './Resume';
import { Container } from './styles';

const HomePage = () => {
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
