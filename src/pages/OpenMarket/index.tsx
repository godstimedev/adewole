import { ScrollToTop } from '../../utilities';
import Body from './Body';
import Hero from './Hero';
import { Container } from './styles';

const OpenMarket = () => {
	return (
		<Container>
			<Hero />
			<Body />
			<ScrollToTop />
		</Container>
	);
};

export default OpenMarket;
