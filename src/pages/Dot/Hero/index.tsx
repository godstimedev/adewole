import { DotHeroImg1, DotHeroImg2 } from '../../../assets/images';
import { Container } from './styles';

const Hero = () => {
	return (
		<Container>
			<div>
				<div className="img-con">
					<img src={DotHeroImg1} alt="Descinder app desktop view" />
				</div>
				<div className="img-con">
					<img src={DotHeroImg2} alt="Descinder app mobile view" />
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
