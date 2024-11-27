import { DescinderHeroImg1, DescinderHeroImg2 } from '../../../assets/images';
import { Container } from './styles';

const Hero = () => {
	return (
		<Container>
			<div>
				<div className="img-con">
					<img src={DescinderHeroImg1} alt="Descinder app desktop view" />
				</div>
				<div className="img-con">
					<img src={DescinderHeroImg2} alt="Descinder app mobile view" />
				</div>
			</div>

			<div>
				<div className="slider">
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
					<h1>Descinder APP |</h1>
				</div>
			</div>
		</Container>
	);
};

export default Hero;
