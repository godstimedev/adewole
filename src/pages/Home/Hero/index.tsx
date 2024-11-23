import { Link } from 'react-router-dom';
import { Alldot } from '../../../assets/images';
import { Badge, Behance, Instagram, Linkedin } from '../../../assets/svgs';
import { Container } from './styles';

const Hero = () => {
	return (
		<Container>
			<div>
				<div>
					<div>
						<h6>DIGITAL UX | product Designer</h6>
						<span>portfolio 2017 - 2023</span>
					</div>
					<div>
						<h6>Available For:</h6>
						<span>
							{' '}
							<span className="badge" /> Freelance / Full-Time
						</span>
					</div>
				</div>

				<h1 className="display1">
					Digital <span>Product Designer</span> based in England, Uk
				</h1>

				<p>
					With seven years of experience as a product designer, I've conducted in-depth research to
					uncover user pain points and create scalable, user-centered products.
				</p>

				<div>
					<Link to={'/'}>
						<Linkedin />
					</Link>
					<Link to={'/'}>
						{' '}
						<Instagram />
					</Link>
					<Link to={'/'}>
						{' '}
						<Behance />
					</Link>
				</div>
			</div>

			<div>
				<div>
					<img src={Alldot} alt="Adewole" />
				</div>
				<span>
					<Badge />
				</span>
			</div>
		</Container>
	);
};

export default Hero;
