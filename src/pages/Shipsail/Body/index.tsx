import {
	ShipsailBodyImg1,
	ShipsailBodyImg10,
	ShipsailBodyImg11,
	ShipsailBodyImg2,
	ShipsailBodyImg3,
	ShipsailBodyImg4,
	ShipsailBodyImg5,
	ShipsailBodyImg6,
	ShipsailBodyImg7,
	ShipsailBodyImg8,
	ShipsailBodyImg9,
} from '../../../assets/images';
import { Container } from './styles';

const Body = () => {
	return (
		<Container>
			<div className="wrapper">
				<div>
					<h2>Enabling businesses to perform timely local and cross-border payments</h2>

					<div className="middle">
						<div>
							<h3>Project Duration</h3>
							<ul>
								<li>Feb 2023 - March 2024</li>
								<li>1 Year 2 Months</li>
							</ul>
						</div>

						<div>
							<h3>Roles</h3>
							<p>Management, Strategy, Brand Identity, Creative Direction, Digital Design Mgt,</p>
						</div>

						<div>
							<h3>Tools</h3>
							<p>Figma and Miro </p>
						</div>
					</div>

					<div className="img-wrapper">
						<div className="img-con-1">
							<img src={ShipsailBodyImg1} alt="Shipsail mobile view" />
						</div>
						<div className="img-con-2">
							<img src={ShipsailBodyImg2} alt="Shipsail mobile view" />
						</div>
						<div className="img-con-1">
							<img src={ShipsailBodyImg3} alt="Shipsail mobile view" />
						</div>
					</div>
				</div>

				{/* section 2 */}
				<div>
					<div>
						<h2>ONBOARDING (SURVEY)</h2>

						<p>
							The Shipsail onboarding survey gathers insights about your values, goals, personality, and
							preferences to assess your marriage readiness and pair you with the most compatible partner.
						</p>
					</div>

					<div>
						<div className="img-wrapper">
							<div className="img-con-1">
								<img src={ShipsailBodyImg4} alt="Shipsail" />
							</div>
							<div className="img-con-2">
								<img src={ShipsailBodyImg5} alt="Shipsail" />
							</div>
							<div className="img-con-1">
								<img src={ShipsailBodyImg6} alt="Shipsail" />
							</div>
							<div className="img-con-2">
								<img src={ShipsailBodyImg7} alt="Shipsail" />
							</div>
						</div>

						<div className="img-wrapper-mobile">
							<div className="img-con">
								<img src={ShipsailBodyImg5} alt="Shipsail" />
							</div>
						</div>
					</div>
				</div>

				{/* section 3 */}
				<div>
					<div>
						<h2>Profile Setup </h2>

						<p>
							The Shipsail profile setup highlights your personality, interests, and goals, making it easy
							to connect you with like-minded partners who share your values.
						</p>
					</div>

					<div className="img-wrapper">
						<div className="img-con-1">
							<img src={ShipsailBodyImg8} alt="Shipsail mobile view" />
						</div>
						<div className="img-con-2 non">
							<img src={ShipsailBodyImg9} alt="Shipsail mobile view" />
						</div>
						<div className="img-con-1 ">
							<img src={ShipsailBodyImg10} alt="Shipsail mobile view" />
						</div>
						<div className="img-con-2">
							<img src={ShipsailBodyImg11} alt="Shipsail mobile view" />
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Body;
