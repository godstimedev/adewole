import {
	HerconomyHeroImg1,
	HerconomyHeroImg2,
	HerconomyHeroImg3,
	HerconomyHeroImg4,
} from '../../../assets/images';
import { Container } from './styles';
import { motion } from 'motion/react';

const Hero = () => {
	return (
		<Container>
			<div>
				<div className="img-con-1">
					<motion.div
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
					>
						<img src={HerconomyHeroImg1} alt="Herconomy" />
					</motion.div>
				</div>

				<div className="img-con-2">
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
					>
						<img src={HerconomyHeroImg2} alt="Herconomy" />
					</motion.div>
				</div>

				<div className="img-con-1 ">
					<motion.div
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
					>
						<img src={HerconomyHeroImg3} alt="Herconomy" />
					</motion.div>
				</div>

				<div className="img-con-2 non">
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
					>
						<img src={HerconomyHeroImg4} alt="Herconomy" />
					</motion.div>
				</div>
			</div>

			<div>
				<div className="slider">
					<h1>HERCONOMY |</h1>
					<h1>HERCONOMY |</h1>
					<h1>HERCONOMY |</h1>
					<h1>HERCONOMY |</h1>
					<h1>HERCONOMY |</h1>
					<h1>HERCONOMY |</h1>
					<h1>HERCONOMY |</h1>
					<h1>HERCONOMY |</h1>
					<h1>HERCONOMY |</h1>
					<h1>HERCONOMY |</h1>
					<h1>HERCONOMY |</h1>
					<h1>HERCONOMY |</h1>
				</div>
			</div>
		</Container>
	);
};

export default Hero;
