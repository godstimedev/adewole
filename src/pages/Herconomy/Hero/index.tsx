import {
	HerconomyHeroImg1,
	HerconomyHeroImg2,
	HerconomyHeroImg3,
	HerconomyHeroImg4,
} from '../../../assets/images';
import { Container } from './styles';

const Hero = () => {
	return (
		<Container>
			<div>
				<div className="img-con-1">
					<img src={HerconomyHeroImg1} alt="Herconomy" />
				</div>
				<div className="img-con-2">
					<img src={HerconomyHeroImg2} alt="Herconomy" />
				</div>
				<div className="img-con-1 ">
					<img src={HerconomyHeroImg3} alt="Herconomy" />
				</div>
				<div className="img-con-2 non">
					<img src={HerconomyHeroImg4} alt="Herconomy" />
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
