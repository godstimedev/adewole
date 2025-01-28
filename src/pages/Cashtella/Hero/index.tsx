import {
	CashtellaHeroImg1,
	CashtellaHeroImg2,
	CashtellaHeroImg3,
	CashtellaHeroImg4,
} from '../../../assets/images';
import { Container } from './styles';

const Hero = () => {
	return (
		<Container>
			<div>
				<div className="img-con-1">
					<img src={CashtellaHeroImg1} alt="Cashtella" />
				</div>
				<div className="img-con-2">
					<img src={CashtellaHeroImg2} alt="Cashtella" />
				</div>
				<div className="img-con-1 non">
					<img src={CashtellaHeroImg3} alt="Cashtella" />
				</div>
				<div className="img-con-2">
					<img src={CashtellaHeroImg4} alt="Cashtella" />
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
