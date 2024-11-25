import Clients from './Clients';
import Hero from './Hero';
import Projects from './Projects';
import { Container } from './styles';

const HomePage = () => {
	return (
		<Container>
			<Hero />
			<Projects />
			<Clients />
		</Container>
	);
};

export default HomePage;
