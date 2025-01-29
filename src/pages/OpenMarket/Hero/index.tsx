import { OpenHeroImg1, OpenHeroImg2 } from '../../../assets/images';
import { Container } from './styles';
import { motion } from 'motion/react';

const Hero = () => {
	return (
		<Container>
			<div>
				<div className="img-con">
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
					>
						<img src={OpenHeroImg1} alt="Descinder app desktop view" />
					</motion.div>
				</div>
				<div className="img-con">
					<motion.div
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
					>
						<img src={OpenHeroImg2} alt="Descinder app mobile view" />
					</motion.div>
				</div>
			</div>

			<div>
				<div className="slider">
					<h1>OPEN MARKET INITIATIVE |</h1>
					<h1>OPEN MARKET INITIATIVE |</h1>
					<h1>OPEN MARKET INITIATIVE |</h1>
					<h1>OPEN MARKET INITIATIVE |</h1>
					<h1>OPEN MARKET INITIATIVE |</h1>
					<h1>OPEN MARKET INITIATIVE |</h1>
					<h1>OPEN MARKET INITIATIVE |</h1>
					<h1>OPEN MARKET INITIATIVE |</h1>
					<h1>OPEN MARKET INITIATIVE |</h1>
				</div>
			</div>
		</Container>
	);
};

export default Hero;
