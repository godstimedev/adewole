import { PrevNext } from '../../components';
import { ScrollToTop } from '../../utilities';
import Body from './Body';
import Hero from './Hero';
import { Container } from './styles';

const Cashtella = () => {
	return (
		<Container>
			<Hero />
			<Body />
			<PrevNext prev={null} next={4} />
			<ScrollToTop />
		</Container>
	);
};

export default Cashtella;
