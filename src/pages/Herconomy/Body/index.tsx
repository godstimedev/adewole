import {
	HerconomyBodyImg1,
	HerconomyBodyImg10,
	HerconomyBodyImg11,
	HerconomyBodyImg2,
	HerconomyBodyImg3,
	HerconomyBodyImg4,
	HerconomyBodyImg5,
	HerconomyBodyImg6,
	HerconomyBodyImg7,
	HerconomyBodyImg8,
	HerconomyBodyImg9,
} from '../../../assets/images';
import { Container } from './styles';

const Body = () => {
	return (
		<Container>
			<div className="wrapper">
				<div>
					<h2>
						Herconomy is Nigeria's first women-focused fintech, empowering female entrepreneurs and
						professionals with financial services, capacity building, community, and opportunities.
					</h2>

					<div className="middle">
						<div>
							<h3>Project Duration</h3>
							<ul>
								<li>June 2021 - Dec 2022</li>
								<li>1 Year 6 Months</li>
							</ul>
						</div>

						<div>
							<h3>Roles</h3>
							<p>Strategy, Brand Identity, Creative Direction, Digital Design Mgt,</p>
						</div>

						<div>
							<h3>Tools</h3>
							<p>Figma, Miro and Userfeel</p>
						</div>
					</div>

					<div className="img-wrapper">
						<div className="img-con-1">
							<img src={HerconomyBodyImg1} alt="Herconomy mobile view" />
						</div>
						<div className="img-con-2">
							<img src={HerconomyBodyImg2} alt="Herconomy mobile view" />
						</div>
						<div className="img-con-1">
							<img src={HerconomyBodyImg3} alt="Herconomy mobile view" />
						</div>
					</div>
				</div>

				{/* section 2 */}
				<div>
					<div>
						<h2>Event Booking /Rerservation</h2>

						<p>
							Purchase your event tickets and manage your bookings effortlessly with our platform. Say
							goodbye to paper tickets—enjoy a seamless, eco-friendly experience that makes buying and
							securely storing your tickets easier than ever.
						</p>
					</div>

					<div>
						<div className="img-wrapper">
							<div className="img-con-1">
								<img src={HerconomyBodyImg4} alt="Herconomy" />
							</div>
							<div className="img-con-2">
								<img src={HerconomyBodyImg5} alt="Herconomy" />
							</div>
							<div className="img-con-1">
								<img src={HerconomyBodyImg6} alt="Herconomy" />
							</div>
							<div className="img-con-2">
								<img src={HerconomyBodyImg7} alt="Herconomy" />
							</div>
						</div>

						<div className="img-wrapper-mobile">
							<div className="img-con">
								<img src={HerconomyBodyImg4} alt="Herconomy" />
							</div>
						</div>
					</div>
				</div>

				{/* section 3 */}
				<div>
					<div>
						<h2>Community Management</h2>

						<p>
							Join or create a community dedicated to empowering women to achieve their dreams, whether
							it’s starting a business or pursuing personal goals. Enjoy curated content in your feed from
							industry experts and like-minded individuals, designed to inspire and support your journey.
						</p>
					</div>

					<div className="img-wrapper">
						<div className="img-con-1">
							<img src={HerconomyBodyImg8} alt="Herconomy mobile view" />
						</div>
						<div className="img-con-2">
							<img src={HerconomyBodyImg9} alt="Herconomy mobile view" />
						</div>
						<div className="img-con-1 non">
							<img src={HerconomyBodyImg10} alt="Herconomy mobile view" />
						</div>
						<div className="img-con-2">
							<img src={HerconomyBodyImg11} alt="Herconomy mobile view" />
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Body;
