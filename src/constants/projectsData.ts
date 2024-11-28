import {
	Cyberspace,
	CyberspacePreview,
	DescinderLogo,
	DescinderPreview,
	Dot,
	DotPreview,
	InterswitchLogo,
	InterswitchPreview,
} from '../assets/images';
import { APP_ROUTES } from './routes';

export const projectsData = [
	{
		id: 1,
		title: 'Descinder ',
		subTitle: 'Human Resourcing',
		logo: DescinderLogo,
		tags: ['Strategy', 'Brand Identity', 'Creative Direction', 'Digital Design'],
		img: DescinderPreview,
		link: APP_ROUTES.descinder,
	},
	{
		id: 2,
		title: 'DOT.AI ',
		subTitle: 'Agency Banking',
		logo: Dot,
		tags: ['Strategy', 'Brand Identity', 'Creative Direction', 'Digital Design'],
		img: DotPreview,
		link: APP_ROUTES.dot,
	},
	{
		id: 3,
		title: 'Interswitch ',
		subTitle: 'Payment Gateway ',
		logo: InterswitchLogo,
		tags: ['Strategy', 'Brand Identity', 'Creative Direction', 'Digital Design'],
		img: InterswitchPreview,
		link: APP_ROUTES.descinder,
	},
	{
		id: 4,
		title: 'Cyberspace ',
		subTitle: 'IT consulting',
		logo: Cyberspace,
		tags: ['Strategy', 'Brand Identity', 'Creative Direction', 'Digital Design'],
		img: CyberspacePreview,
		link: APP_ROUTES.descinder,
	},
];
