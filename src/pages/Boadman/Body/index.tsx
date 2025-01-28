import {
	BoadmanBodyImg1,
	BoadmanBodyImg10,
	BoadmanBodyImg11,
	BoadmanBodyImg12,
	BoadmanBodyImg13,
	BoadmanBodyImg14,
	BoadmanBodyImg15,
	BoadmanBodyImg16,
	BoadmanBodyImg17,
	BoadmanBodyImg2,
	BoadmanBodyImg3,
	BoadmanBodyImg4,
	BoadmanBodyImg5,
	BoadmanBodyImg6,
	BoadmanBodyImg7,
	BoadmanBodyImg8,
	BoadmanBodyImg9,
} from '../../../assets/images';
import { Container } from './styles';

const Body = () => {
	return (
		<Container>
			<div className="wrapper">
				<div>
					<h2>
						We are a one-of-a-kind platform, where everyone plays, enjoys themselves and most importantly,
						win prizes.
					</h2>

					<div className="middle">
						<div>
							<h3>Project Duration</h3>
							<ul>
								<li>March 2021 - Dec 2022</li>
								<li>1 Year 6 Months</li>
							</ul>
						</div>

						<div>
							<h3>Roles</h3>
							<p>Idea Conceptualisation, Sketch, Creative Direction, Design Mgt,</p>
						</div>

						<div>
							<h3>Tools</h3>
							<p>Figma, Invision Freehand, Miro, Google Forms, Userfel</p>
						</div>
					</div>

					<div className="img-wrapper">
						<div className="img-con">
							<img src={BoadmanBodyImg1} alt="Boadman desktop view" />
						</div>
						<div className="img-con">
							<img src={BoadmanBodyImg2} alt="Boadman mobile view" />
						</div>
					</div>
				</div>

				{/* section 2 */}
				<div>
					<div>
						<h2>Landing Page (Web)</h2>

						<p>
							To address Descinder's challenge of uniting businesses and early-career individuals on a
							user-friendly platform, the best strategy is a comprehensive UX design. Prioritize a seamless
							interface, ensuring accessibility and ease of use for businesses, interns, and fresh
							graduates.
						</p>
					</div>

					<div>
						<div className="img-wrapper">
							<div className="img-con-2">
								<img src={BoadmanBodyImg3} alt="Boadman" />
							</div>
							<div className="img-con-1">
								<img src={BoadmanBodyImg4} alt="Boadman" />
							</div>
							<div className="img-con-2">
								<img src={BoadmanBodyImg5} alt="Boadman" />
							</div>
						</div>

						<div className="img-wrapper-mobile">
							<div className="img-con">
								<img src={BoadmanBodyImg6} alt="Boadman" />
							</div>
							<div className="img-con">
								<img src={BoadmanBodyImg7} alt="Boadman" />
							</div>
						</div>
					</div>
				</div>

				{/* section 3 */}
				<div>
					<div>
						<h2>Gaming Modules (Mobile Responsiveness)</h2>

						<p>
							To address Descinder's challenge of uniting businesses and early-career individuals on a
							user-friendly platform, the best strategy is a comprehensive UX design. Prioritize a seamless
							interface, ensuring accessibility and ease of use for businesses, interns, and fresh
							graduates.
						</p>
					</div>

					<div>
						<div className="img-wrapper">
							<div className="img-con-1">
								<img src={BoadmanBodyImg8} alt="Boadman" />
							</div>
							<div className="img-con-2">
								<img src={BoadmanBodyImg9} alt="Boadman" />
							</div>
							<div className="img-con-1">
								<img src={BoadmanBodyImg10} alt="Boadman" />
							</div>
							<div className="img-con-2">
								<img src={BoadmanBodyImg11} alt="Boadman" />
							</div>
						</div>

						<div className="img-wrapper-mobile">
							<div className="img-con">
								<img src={BoadmanBodyImg8} alt="Boadman" />
							</div>
							<div className="img-con">
								<img src={BoadmanBodyImg10} alt="Boadman" />
							</div>
						</div>
					</div>
				</div>

				{/* section 4 */}
				<div>
					<div>
						<h2>Gaming Overview</h2>

						<p>
							To address Descinder's challenge of uniting businesses and early-career individuals on a
							user-friendly platform, the best strategy is a comprehensive UX design. Prioritize a seamless
							interface, ensuring accessibility and ease of use for businesses, interns, and fresh
							graduates.
						</p>
					</div>

					<div>
						<div className="img-wrapper">
							<div>
								<img src={BoadmanBodyImg12} alt="Boadman" />
							</div>
							<div>
								<div className="img-con-1">
									<img src={BoadmanBodyImg13} alt="Boadman" />
								</div>
								<div className="img-con-2">
									<img src={BoadmanBodyImg14} alt="Boadman" />
								</div>
								<div className="img-con-1">
									<img src={BoadmanBodyImg15} alt="Boadman" />
								</div>
								<div className="img-con-2">
									<img src={BoadmanBodyImg16} alt="Boadman" />
								</div>
							</div>
						</div>

						<div className="img-wrapper-mobile">
							<div className="img-con">
								<img src={BoadmanBodyImg13} alt="Boadman" />
							</div>
							<div className="img-con">
								<img src={BoadmanBodyImg14} alt="Boadman" />
							</div>
						</div>
					</div>
				</div>

				{/* section 5 */}
				<div>
					<div className="img-con">
						<img src={BoadmanBodyImg17} alt="Boadman" />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Body;
