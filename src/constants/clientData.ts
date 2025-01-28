import { Cashtella, Herconomy, Shipsail } from '../assets/images';
import { APP_ROUTES } from './routes';

export const clientData = [
	{
		img: Cashtella,
		job: {
			title: 'Lead UX designer',
			mode: 'Contract',
		},
		company: 'Cashtella',
		description: 'Enabling businesses to perform timely local and cross-border payments',
		link: APP_ROUTES.cashtella,
	},
	{
		img: Herconomy,
		job: {
			title: 'Product designer',
			mode: 'Contract',
		},
		company: 'HERCONomy',
		link: APP_ROUTES.herconomy,
		description:
			"Herconomy, Nigeria's first women-focused fintech, empowers female entrepreneurs with finance, growth, and community.",
	},
	{
		img: Shipsail,
		job: {
			title: 'UX designer',
			mode: 'Contract',
		},
		company: 'Shipsail',
		link: APP_ROUTES.shipsail,
		description:
			'Shipsail assesses your marriage readiness with a personalized score, helping us match you with the most compatible partner for a lasting relationship.',
	},
];
