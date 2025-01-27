import { PrevNext } from '../../components';
import { ScrollToTop } from '../../utilities';
import Body from './Body';
import Hero from './Hero';
import { Container } from './styles';

const Dot = () => {
	return (
		<Container>
			<Hero />
			<Body />
			<PrevNext prev={null} next={1} />
			<ScrollToTop />
		</Container>
	);
};

export default Dot;
