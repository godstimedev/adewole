import { PrevNext } from '../../components';
import { ScrollToTop } from '../../utilities';
import Body from './Body';
import Hero from './Hero';
import { Container } from './styles';

const Shipsail = () => {
	return (
		<Container>
			<Hero />
			<Body />
			<PrevNext prev={4} next={null} />
			<ScrollToTop />
		</Container>
	);
};

export default Shipsail;
