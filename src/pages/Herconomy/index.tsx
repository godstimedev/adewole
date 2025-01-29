import { PrevNext } from '../../components';
import { ScrollToTop } from '../../utilities';
import Body from './Body';
import Hero from './Hero';
import { Container } from './styles';

const Herconomy = () => {
	return (
		<Container>
			<Hero />
			<Body />
			<PrevNext prev={null} next={5} />
			<ScrollToTop />
		</Container>
	);
};

export default Herconomy;
