import { Link } from 'react-router-dom';
import { Alldot } from '../../../assets/images';
import { Badge, Behance, Instagram, Linkedin } from '../../../assets/svgs';
import { Container } from './styles';
import { motion } from 'motion/react';

const Hero = () => {
	return (
		<Container>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
			>
				<div>
					<div>
						<h6>DIGITAL UX | product Designer</h6>
						<span>portfolio 2017 - 2025</span>
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
					With over seven years of experience as a product designer, I've conducted in-depth research to
					uncover user pain points and create scalable, user-centered products.
				</p>

				<div>
					<Link to={'https://www.linkedin.com/in/adewole-ampitan-43308697/'} target="_blank">
						<Linkedin />
					</Link>
					<Link to={'https://www.instagram.com/ampitanade/'} target="_blank">
						{' '}
						<Instagram />
					</Link>
					<Link to={'https://www.behance.net/ampitanadeb677'} target="_blank">
						{' '}
						<Behance />
					</Link>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
			>
				<div>
					<img src={Alldot} alt="Adewole" />
				</div>
				<span>
					<Badge />
				</span>
			</motion.div>
		</Container>
	);
};

export default Hero;
