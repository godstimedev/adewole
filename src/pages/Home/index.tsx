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
		</Container>
	);
};

export default HomePage;
