import {
	BoadmanHeroImg1,
	BoadmanHeroImg1Vector,
	BoadmanHeroImg2,
	BoadmanHeroImg2Vector,
} from '../../../assets/images';
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
						<img src={BoadmanHeroImg1} alt="Boadman app mobile view" className="main" />
						<img src={BoadmanHeroImg1Vector} alt="Boadman" className="vector" />
					</motion.div>
				</div>
				<div className="img-con">
					<motion.div
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
					>
						<img src={BoadmanHeroImg2} alt="Boadman app desktop view" className="main" />
						<img src={BoadmanHeroImg2Vector} alt="Boadman" className="vector" />
					</motion.div>
				</div>
			</div>

			<div>
				<div className="slider">
					<h1>BOADMAN |</h1>
					<h1>BOADMAN |</h1>
					<h1>BOADMAN |</h1>
					<h1>BOADMAN |</h1>
					<h1>BOADMAN |</h1>
					<h1>BOADMAN |</h1>
					<h1>BOADMAN |</h1>
					<h1>BOADMAN |</h1>
					<h1>BOADMAN |</h1>
					<h1>BOADMAN |</h1>
					<h1>BOADMAN |</h1>
					<h1>BOADMAN |</h1>
				</div>
			</div>
		</Container>
	);
};

export default Hero;
