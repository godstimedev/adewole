import { ScrollToTop } from '../../utilities';
import Body from './Body';
import Hero from './Hero';
import { Container } from './styles';

const Dot = () => {
	return (
		<Container>
			<Hero />
			<Body />
			<ScrollToTop />
		</Container>
	);
};

export default Dot;
