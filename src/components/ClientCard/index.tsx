import { Link } from 'react-router-dom';
import { ArrowRight } from '../../assets/svgs';
import { Container } from './styles';

type PropType = {
	img: string;
	job: {
		title: string;
		mode: string;
	};
	company: string;
	description: string;
	link: string;
};

const ClientCard = (props: PropType) => {
	const { img, job, company, description, link } = props;
	return (
		<Container>
			<img src={img} alt={company} />
			<div>
				<div>
					<span>
						{job.title} ({job.mode})
					</span>
					<h3>{company}</h3>
				</div>

				<p>{description}</p>
			</div>

			<Link to={link}>
				<button>
					See Project <ArrowRight />
				</button>
			</Link>
		</Container>
	);
};

export default ClientCard;
