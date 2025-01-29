import {
	CashtellaHeroImg1,
	CashtellaHeroImg2,
	CashtellaHeroImg3,
	CashtellaHeroImg4,
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
						<img src={CashtellaHeroImg1} alt="Cashtella" />
					</motion.div>
				</div>

				<div className="img-con-2">
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
					>
						<img src={CashtellaHeroImg2} alt="Cashtella" />
					</motion.div>
				</div>

				<div className="img-con-1 non">
					<motion.div
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
					>
						<img src={CashtellaHeroImg3} alt="Cashtella" />
					</motion.div>
				</div>

				<div className="img-con-2">
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
					>
						<img src={CashtellaHeroImg4} alt="Cashtella" />
					</motion.div>
				</div>
			</div>

			<div>
				<div className="slider">
					<h1>CASHTELLA |</h1>
					<h1>CASHTELLA |</h1>
					<h1>CASHTELLA |</h1>
					<h1>CASHTELLA |</h1>
					<h1>CASHTELLA |</h1>
					<h1>CASHTELLA |</h1>
					<h1>CASHTELLA |</h1>
					<h1>CASHTELLA |</h1>
					<h1>CASHTELLA |</h1>
					<h1>CASHTELLA |</h1>
					<h1>CASHTELLA |</h1>
					<h1>CASHTELLA |</h1>
				</div>
			</div>
		</Container>
	);
};

export default Hero;
