import {
	ShipsailHeroImg1,
	ShipsailHeroImg2,
	ShipsailHeroImg3,
	ShipsailHeroImg4,
} from '../../../assets/images';
import { Container } from './styles';
import { motion } from 'motion/react';

const Hero = () => {
	return (
		<Container>
			<div>
				<motion.div
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
				>
					<div className="img-con-1">
						<img src={ShipsailHeroImg1} alt="Shipsail" />
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
				>
					<div className="img-con-2">
						<img src={ShipsailHeroImg2} alt="Shipsail" />
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
				>
					<div className="img-con-1 ">
						<img src={ShipsailHeroImg3} alt="Shipsail" />
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
				>
					<div className="img-con-2 non">
						<img src={ShipsailHeroImg4} alt="Shipsail" />
					</div>
				</motion.div>
			</div>

			<div>
				<div className="slider">
					<h1>SHIPSAIL |</h1>
					<h1>SHIPSAIL |</h1>
					<h1>SHIPSAIL |</h1>
					<h1>SHIPSAIL |</h1>
					<h1>SHIPSAIL |</h1>
					<h1>SHIPSAIL |</h1>
					<h1>SHIPSAIL |</h1>
					<h1>SHIPSAIL |</h1>
					<h1>SHIPSAIL |</h1>
					<h1>SHIPSAIL |</h1>
					<h1>SHIPSAIL |</h1>
					<h1>SHIPSAIL |</h1>
				</div>
			</div>
		</Container>
	);
};

export default Hero;
