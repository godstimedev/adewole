import { DotHeroImg1, DotHeroImg2 } from '../../../assets/images';
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
						<img src={DotHeroImg1} alt="Dot.Ai app desktop view" />
					</motion.div>
				</div>
				<div className="img-con">
					<motion.div
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
					>
						<img src={DotHeroImg2} alt="Dot.Ai app mobile view" />
					</motion.div>
				</div>
			</div>

			<div>
				<div className="slider">
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
					<h1>DOT.AI |</h1>
				</div>
			</div>
		</Container>
	);
};

export default Hero;
