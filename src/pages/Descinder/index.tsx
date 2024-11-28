import { ScrollToTop } from '../../utilities';
import Body from './Body';
import Hero from './Hero';
import { Container } from './styles';

const Descinder = () => {
	return (
		<Container>
			<Hero />
			<Body />
			<ScrollToTop />
		</Container>
	);
};

export default Descinder;
