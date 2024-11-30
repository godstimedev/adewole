import { OpenHeroImg1, OpenHeroImg2 } from '../../../assets/images';
import { Container } from './styles';

const Hero = () => {
	return (
		<Container>
			<div>
				<div className="img-con">
					<img src={OpenHeroImg1} alt="Descinder app desktop view" />
				</div>
				<div className="img-con">
					<img src={OpenHeroImg2} alt="Descinder app mobile view" />
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
