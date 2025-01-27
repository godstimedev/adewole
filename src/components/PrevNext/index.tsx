import { Link } from 'react-router-dom';
import {
	BoadmanLogo,
	CashtellaLogo,
	DotPayLogo,
	HerconomyLogo,
	QuicktellerLogo,
	ShipsailLogo,
} from '../../assets/images';
import { NextIcon, PrevIcon } from '../../assets/svgs';
import { APP_ROUTES } from '../../constants';
import { Container } from './styles';

type PropTypes = {
	next: 0 | 1 | 2 | 3 | 4 | 5 | null;
	prev: 0 | 1 | 2 | 3 | 4 | 5 | null;
};

const PrevNext = (props: PropTypes) => {
	const { next, prev } = props;

	return (
		<Container $next={next} $prev={prev}>
			<Link to={prev ? items[prev as number].link : '#'} className="prev">
				<button>
					<PrevIcon />
				</button>
			</Link>
			<div>
				<h6>Next Design</h6>
				<img src={items[next as number].img} alt={items[next as number].name} />
				<p>{items[next as number].text}</p>
			</div>
			<Link to={items[next as number].link} className="next">
				<button>
					<NextIcon />
				</button>
			</Link>
		</Container>
	);
};

export default PrevNext;

const items = [
	{
		name: 'DotPay',
		img: DotPayLogo,
		link: APP_ROUTES.dot,
		text:
			'DotPay empowers people to receive payments, apply for business loans, access wealth-building investments, get insurance and everything you need to create the life you want',
	},
	{
		name: 'Quickteller',
		img: QuicktellerLogo,
		link: APP_ROUTES.openMarket,
		text:
			'Building an ecosystem aimed at levelling the demand, supply and delivery gap between FMCGs and Retailers.',
	},
	{
		name: 'Boadman',
		img: BoadmanLogo,
		link: APP_ROUTES.boadman,
		text:
			'We are a one-of-a-kind platform, where everyone plays, enjoys themselves and most importantly, win prizes.',
	},
	{
		name: 'Cashtella',
		img: CashtellaLogo,
		link: APP_ROUTES.cashtella,
		text: 'Enabling businesses to perform timely local and cross-border payments ',
	},
	{
		name: 'Herconomy',
		img: HerconomyLogo,
		link: APP_ROUTES.herconomy,
		text:
			"Herconomy is Nigeria's first women-focused fintech, empowering female entrepreneurs and professionals with financial services, capacity building, community, and opportunities.",
	},
	{
		name: 'Shipsail',
		img: ShipsailLogo,
		link: APP_ROUTES.shipsail,
		text:
			'Shipsail is the ultimate app for marriage, using advanced algorithms to pair individuals with like-minded partners who share their goals and values.',
	},
];
