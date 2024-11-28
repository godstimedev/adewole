import {
	DesignManagementProcess,
	DesignManagementProcessMobile,
	DotBodyImg1,
	DotBodyImg2,
	DotBodyImg3,
	DotBodyImg4,
	DotChart,
	DotChartDetails,
	DotHighFidelity,
	DotLowFidelity,
	DotPay,
	DotPayDashboard,
	DotPayIcons,
	DotPayInput,
	DotRoles,
} from '../../../assets/images';
import { Gabriel, Suliyat } from '../../../assets/svgs';
import { Container } from './styles';

const Body = () => {
	return (
		<Container>
			<div>
				<h2>
					DotPay empowers people to receive payments, apply for business loans, access wealth-building
					investments, get insurance and everything you need to create the life you want
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
						<p>Figma, Invision Freehand, Miro, Google Forms, Userfeel</p>
					</div>
				</div>

				<div className="img-wrapper">
					<div className="img-con">
						<img src={DotBodyImg1} alt="Dot pay desktop view" />
					</div>
					<div className="img-con">
						<img src={DotBodyImg2} alt="Dot pay mobile view" />
					</div>
				</div>

				<div>
					<div>
						<h3>Challenge</h3>
						<p>
							In Nigeria, agency banking employs human agent networks or merchants equipped with
							point-of-sale (POS) technology, acting as human ATMs to provide financial services to
							underserved areas. Despite its potential, this approach faces obstacles such as payment
							gateway downtime and security concerns. Dotapy, a digital banking solution, aims to address
							these challenges by offering a fully digital platform for customers to conduct various
							banking transactions, including payments, withdrawals, transfers, and more.
						</p>
					</div>
					<div>
						<h3>Solution</h3>
						<p>
							As a product designer, I tackled the challenges of agency banking in Nigeria, focusing on
							human agent networks and POS-equipped merchants providing financial services. Recognizing
							issues like payment gateway downtime and security concerns, I conceptualized Dotapy, a
							digital banking solution. Dotapy overcame obstacles by introducing a comprehensive digital
							platform, enabling customers to seamlessly conduct diverse banking transactions, thereby
							enhancing accessibility and security in the financial service landscape.
						</p>
					</div>
				</div>
			</div>

			{/* section 2 */}
			<div>
				<div>
					<h2>DESIGN PROCESS</h2>

					<p>
						The first phase is the understanding phase, where you understand the user first, Market &
						Business needs for the product. To understand the users, i conducted a research, interview
						(Both Physically & Virtual) , also by using questionnaires when necessary. From the interview
						i created personas for the users.{' '}
					</p>

					<div className="img-con">
						<img src={DesignManagementProcess} alt="Design management process" />
					</div>
					<div className="img-con-mobile">
						<img src={DesignManagementProcessMobile} alt="Design management process" />
					</div>
				</div>

				<div>
					<div>
						<h3>Segmentation</h3>

						<div>
							<h4>SUPPLIERS</h4>
							<div>
								<img src={DotRoles} alt="ROLES" />
								<ul>
									<li>Ability to Monitor both Aggregators and Agents</li>
									<li>Monitor the Number in Unique Costumers</li>
									<li>Ability to Resolve Dispute as early as possible.</li>
									<li>Disburse Loan to eligible agents</li>
								</ul>
							</div>
						</div>
						<div>
							<h4>DISTRIBUTORS</h4>
							<div>
								<img src={DotRoles} alt="ROLES" />
								<ul>
									<li>Onboarding agents on Platforms</li>
									<li>View My Agent Transaction</li>
									<li>Insight on Acitve and inactive agents to give nugde</li>
									<li>Monitor my aggregator commisison from Agents</li>
								</ul>
							</div>
						</div>
						<div>
							<h4>RETAILERS</h4>
							<div>
								<img src={DotRoles} alt="ROLES" />
								<ul>
									<li>Payment Downtime</li>
									<li>Poor Dispute Resoultion</li>
									<li>Agent Liquidity Issue</li>
									<li>Poor Agency Rate</li>
									<li>Bad Access to loans</li>
								</ul>
							</div>
						</div>
					</div>

					<div>
						<h3>USER RESEARCH (MARKET FINDINGS)</h3>

						<p className="center">
							After Market research I gained some understanding on the agency banking sector and who are
							most likely the users that will be interacting with this app.{' '}
						</p>

						<div>
							<img className="chart" src={DotChart} alt="Dot chart" />
							<img className="chart-dets" src={DotChartDetails} alt="Dot chart details" />
						</div>
					</div>
				</div>
			</div>

			{/* section 3 */}
			<div>
				<div className="img-con">
					<img src={DotBodyImg3} alt="Descinder app mobile view" />
				</div>
				<div className="img-con">
					<img src={DotBodyImg4} alt="Descinder app desktop view" />
				</div>
			</div>

			<div className="persona">
				<h2> USER PERSONA</h2>
				<p>
					The first phase is the understanding phase, where you understand the user first, Market &
					Business needs for the product. To understand the users, i conducted a research, interview
					(Both Physically & Virtual) , also by using questionnaires when necessary. From the interview i
					created personas for the users.
				</p>
				<div>
					<div>
						<div>
							<div>
								<Gabriel />
								<h6>Gabriel Onasanya</h6>
							</div>
							<div>
								<h6>34</h6>
								<span>AGE</span>
							</div>
							<div>
								<h6>MALE</h6>
								<span>GENDER</span>
							</div>
							<div>
								<h6>4yrs+</h6>
								<span>EXPERIENCE</span>
							</div>
						</div>

						<div>
							<h6>Bio</h6>
							<p>
								Onasanya has been in the agency banking space for some years now. He currently has 2-3
								terminal which he use for his daily transactions with customers. Below are his and goals he
								sort for in other agency platforms.
							</p>
						</div>

						<div>
							<h6>Goals</h6>
							<ul>
								<li>Great rate for agent </li>
								<li>Ability to withdraw cash as soon as it needed</li>
								<li>Get Access to Bank loans</li>
							</ul>
						</div>
					</div>
					<div>
						<div>
							<div>
								<Suliyat />
								<h6>SULIYAT MOHAMMED</h6>
							</div>
							<div>
								<h6>46</h6>
								<span>AGE</span>
							</div>
							<div>
								<h6>FEMALE</h6>
								<span>GENDER</span>
							</div>
							<div>
								<h6>7yrs+</h6>
								<span>EXPERIENCE</span>
							</div>
						</div>

						<div>
							<h6>Bio</h6>
							<p>
								Suliyat is an agency with 7 years in her porfolio in agency banking, she have gotten her own
								share of frustration and will looking for a better solution and system that works for her.
								Below are her goal she is looking to attain.
							</p>
						</div>

						<div>
							<h6>Goals</h6>
							<ul>
								<li>Increase uptime to gain more customers </li>
								<li>Get feedbacks on my concerns as soon as possible</li>
								<li>To get a great User Experience ( Accessibility)</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* section 4 */}
			<div>
				<div>
					<h2> LOW FIDELITY WIREFRAME</h2>
					<p>
						The first phase is the understanding phase, where you understand the user first, Market &
						Business needs for the product. To understand the users, i conducted a research, interview
						(Both Physically & Virtual) , also by using questionnaires when necessary. From the interview
						i created personas for the users.{' '}
					</p>

					<div className="img-con">
						<img src={DotLowFidelity} alt="Dot low fidelity wireframe" />
					</div>
				</div>
				<div>
					<h2> High FIDELITY WIREFRAME</h2>
					<p>
						The first phase is the understanding phase, where you understand the user first, Market &
						Business needs for the product. To understand the users, i conducted a research, interview
						(Both Physically & Virtual) , also by using questionnaires when necessary. From the interview
						i created personas for the users.{' '}
					</p>

					<div className="img-con">
						<img src={DotHighFidelity} alt="Dot high fidelity wireframe" />
					</div>
				</div>
				<div>
					<h2> Brand Identity Intergration</h2>

					<p>
						The brand experience model directs the emotion we want to transmit throughout a contact, and
						the brand sign was the starting point for our design. It's easy to spot and repeatable.
					</p>

					<div>
						<h3>Signature-Linear-Clear space</h3>

						<p>
							Dotpay's height – denoted above as "X" – determines the preferred clean space around the
							signature. This is the primary brand mark found on the majority of products. The Dotpay
							signature must be surrounded by a minimum amount of open space, as shown in the building
							figure. The clean space region is defined by the icon's height. The minimum clear space area
							is 1 "x" to the left and right of the signature, as well as 1 "x" above and below the
							signature.
						</p>
					</div>
				</div>
				<div className="dot-pay">
					<img src={DotPay} alt="Dot Pay" />
				</div>
				<div>
					<h2>DESIGN COMPONENT</h2>

					<p>
						We designed the component in reference to the other components in the environment. In terms of
						hierarchy and branding, size, type, elevation, and colour are the most important factors. The
						primary components should feel the most branded, while the subsidiary components should feel
						below or on par with one another. To specify how a component should be built and scaled, our
						design system provides spec'ing symbols such as spacers, centering, and tap targets. The user
						is informed of the component's status by state changes. They should have a similar appearance
						but be identifiable from one another.
					</p>
					<div className="design-component">
						<img src={DotPayIcons} alt="Dot pay icons" />
						<img src={DotPayDashboard} alt="Dot pay dashboard" />
						<img src={DotPayInput} alt="Dot pay input" />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Body;
