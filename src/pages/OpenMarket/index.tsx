import { PrevNext } from '../../components';
import { ScrollToTop } from '../../utilities';
import Body from './Body';
import Hero from './Hero';
import { Container } from './styles';

const OpenMarket = () => {
	return (
		<Container>
			<Hero />
			<Body />
			<PrevNext prev={null} next={2} />
			<ScrollToTop />
		</Container>
	);
};

export default OpenMarket;
