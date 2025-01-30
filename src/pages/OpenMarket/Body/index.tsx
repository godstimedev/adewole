import {
	DesignManagementProcess,
	DesignManagementProcessMobile,
	DotRoles,
	OpenBodyImg1,
	OpenBodyImg2,
	OpenBodyImg3,
	OpenBodyImg4,
	OpenBodyImg5,
	OpenBodyImg6,
	OpenHighWireframe,
	OpenIcons,
	OpenInfoChart,
	OpenInput,
	OpenLowWireframe,
	OpenResearch1,
	OpenResearch2,
	OpenTypography,
	OpenTypography2,
	OpenUpload,
} from '../../../assets/images';
import { GoalOne, GoalThree, GoalTwo, No1, No2, No3 } from '../../../assets/svgs';
import { Container } from './styles';

const Body = () => {
	return (
		<Container>
			<div className="wrapper">
				<div>
					<h2>
						Building an ecosystem aimed at leveling the demand, supply and delivery gap between FMCGs and
						Retailers.
					</h2>

					<div className="middle">
						<div>
							<h3>Project Duration</h3>
							<ul>
								<li>Feb 2021 - Dec 2022</li>
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
							<img src={OpenBodyImg1} alt="Dot pay desktop view" />
						</div>
						<div className="img-con">
							<img src={OpenBodyImg2} alt="Dot pay mobile view" />
						</div>
					</div>

					<div>
						<div>
							<h3>Challenge</h3>
							<p>
								Our goal is to fix the problem, and we want to take advantage of any future commercial
								prospects. Key presumptions and market insights are presented, predicted revenue and
								expenses are modelled, and potential risks are examined.
							</p>
						</div>
						<div>
							<h3>Solution</h3>
							<p>
								To address Descinder's challenge of uniting businesses and early-career individuals on a
								user-friendly platform, the best strategy is a comprehensive UX design. Prioritize a
								seamless interface, ensuring accessibility and ease of use for businesses, interns, and
								fresh graduates.
							</p>
						</div>
					</div>
				</div>

				{/* section 2 */}
				<div>
					<div>
						<h2>DESIGN PROCESS</h2>

						<div className="img-con">
							<img src={DesignManagementProcess} alt="Design management process" />
						</div>
						<div className="img-con-mobile">
							<img src={DesignManagementProcessMobile} alt="Design management process" />
						</div>
					</div>

					<div>
						<h2>DISCOVER & UNDERSTAND USERS</h2>

						<div>
							<div>
								<h3>Insufficient funds (POS)</h3>
								<p>
									The AOV[Average Order Value] at the local market is small, but with a potential to grow by
									20% if there are other acceptable payment options. Most payment are in cash, when cash runs
									out, so does all possible additional purchases by the customer.
								</p>
							</div>
							<div>
								<h3>ACCESS TO CREDIT </h3>
								<p>
									Commercial loans are not profitable to the local market merchants, the loan requirements
									are also burdensome. Their needs are daily or weekly working capital they can buy stocks or
									pay production cost, to generate instant income and pay small interest on such loan weekly.
								</p>
							</div>
							<div>
								<h3>LOW MARGINS</h3>
								<p>
									Cheaper Sources to buy from, to improve margin and afford to pay operational cost or loan
									repayment. The cost of traveling to procure items, the cost of closing the kiosk while in
									transit . The higher rate of buying on credit
								</p>
							</div>
							<div>
								<h3>THEFT</h3>
								<p>
									Poor Bookkeeping, results in excessive stocking or lack of stock. Poor accountability and
									aligning sales to actual purchased stock. Sales staff taking advantage of situation which
									results in stealing and mismanagement of resources
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* section 3 */}
				<div>
					<div>
						<h2>AUDIENCE, OPPORTUNITIES</h2>
						<div>
							<div>
								<h3>Target Market (AUDIENCE)</h3>
								<ul>
									<li>
										Focus is on MSMEs who fall within the Retail GDP Sector and trade in the Open Markets
										Across Nigeria.
									</li>
									<li>
										The challenges plaguing MSMEs are well defined. Low income and access to financing as well
										as poor infrastructure.
									</li>
									<li>
										High comfort with cash, has also impeded the opportunity for the growth of digital
										payments
									</li>
								</ul>
							</div>
							<div>
								<h3>Opportunities</h3>
								<ul>
									<li>99.8% businesses in MSME segment are micro businesses – NBS.</li>
									<li>49% of GDP in the last 5 years. Retail contribution to GDP N38.3 trillion-2018. </li>
									<li>774 LGA – Avg of 3000 local markets & 17m potential Merchants</li>
									<li>
										(High volume transaction segment and unserved market.[No digital payment structure).
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div></div>
				</div>

				<div className="section-4">
					<div>
						<h2>Goals</h2>

						<div>
							<div>
								<GoalOne />
								<p>
									Build an Open Ecosystem Facilitating both demand & supply between MSMEs and key Value
									Creators in the open market.
								</p>
							</div>
							<div>
								<GoalTwo />
								<p>Digitise daily transactions at the Micro Transactions level.</p>
							</div>
							<div>
								<GoalThree />
								<p>Expand the acquiring business into this untapped market by providing payment rails.</p>
							</div>
						</div>
					</div>

					<div>
						<div>
							<h2>USER Segmentation & ROLES</h2>
							<p>
								There are three different users because the platform is accessible on different platforms
								(desktop, mobile), including the Suppliers who make goods for the distributors. both the
								retailers who buy items from the retailers and sell them to the end users or consumers, as
								well as the distributors who make products available to the retailers.
							</p>
						</div>

						<div className="segmentation">
							<div>
								<h3>Segmentation</h3>

								<div>
									<h4>SUPPLIERS</h4>
									<div>
										<img src={DotRoles} alt="ROLES" />
										<ul>
											<li>Produce goods</li>
											<li>Connects with distributors</li>
											<li>Add & Update product listings</li>
											<li>Monitor distributors performance</li>
										</ul>
									</div>
								</div>
								<div>
									<h4>DISTRIBUTORS</h4>
									<div>
										<img src={DotRoles} alt="ROLES" />
										<ul>
											<li>Add, edit and delete inventory</li>
											<li>Create Sale Representatives & Assign Orders</li>
											<li>Manage deliveries by sales representatives</li>
										</ul>
									</div>
								</div>
								<div>
									<h4>RETAILERS</h4>
									<div>
										<img src={DotRoles} alt="ROLES" />
										<ul>
											<li>Place order from distributors</li>
											<li>Manage Orders</li>
										</ul>
									</div>
								</div>
							</div>

							<div>
								<h3>How might we's?</h3>

								<div>
									<div>
										<div>
											<No1 />
											<h4>EAZY purchase OF goods</h4>
										</div>
										<p>
											Assist MSMEs with low income in gaining some measure of financial empowerment to raise or
											improve their purchasing power.
										</p>
									</div>
									<div>
										<div>
											<No2 />
											<h4>financial empowerment</h4>
										</div>
										<p>
											Assist MSMEs with low income in gaining some measure of financial empowerment to raise or
											improve their purchasing power.{' '}
										</p>
									</div>
									<div>
										<div>
											<No3 />
											<h4>manage our goods</h4>
										</div>
										<p>
											Help retailers manage our goods while being unaffected by inventory (Tracking orders and
											items)?
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* section 4 */}
				<div>
					<div>
						<h2> QuaNtiTative Research (RETAILERS)</h2>
						<p>
							We choose to conduct surveys and interviews as part of our user research approach to better
							understand the needs of our users. Because they provide quantifiable data, surveys are an
							excellent way to get an overview of the customer environment. I also enjoy using qualitative
							research (interviews) to thoroughly comprehend the design approach.
						</p>

						<div className="images">
							<img src={OpenResearch1} alt="Quantitative research age" />
							<img src={OpenResearch2} alt="Quantitative research device choice" />
						</div>
					</div>
					<div>
						<h2>
							INFORMATION ARCHITECTURE &<br /> JOURNEY (RETAILERS)
						</h2>
						<p>
							We choose to conduct surveys and interviews as part of our user research approach to better
							understand the needs of our users. Because they provide quantifiable data, surveys are an
							excellent way to get an overview of the customer environment. I also enjoy using qualitative
							research (interviews) to thoroughly comprehend the design approach.
						</p>

						<div className="img-con">
							<img src={OpenInfoChart} alt="Information architecture" />
						</div>
					</div>
					<div>
						<h2> Typography & ColORS</h2>
						<p>
							We choose to conduct surveys and interviews as part of our user research approach to better
							understand the needs of our users. Because they provide quantifiable data, surveys are an
							excellent way to get an overview of the customer environment. I also enjoy using qualitative
							research (interviews) to thoroughly comprehend the design approach.
						</p>

						<div className="img-con-1">
							<img src={OpenTypography} alt="Typography and colors" />
						</div>
						<div className="img-con-2">
							<img src={OpenTypography2} alt="Typography and colors" />
						</div>
					</div>
					<div>
						<h2> LOW FIDELITY WIREFRAME</h2>
						<p>
							The first phase is the understanding phase, where you understand the user first, Market &
							Business needs for the product. To understand the users, i conducted a research, interview
							(Both Physically & Virtual) , also by using questionnaires when necessary. From the interview
							i created personas for the users.{' '}
						</p>

						<div className="img-con-1">
							<img src={OpenLowWireframe} alt="Low fidelity wireframe" />
						</div>

						<div className="img-con-3">
							<img src={OpenBodyImg3} alt="Open Market" />
							<img src={OpenBodyImg4} alt="Open Market" />
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

						<div className="img-con-1">
							<img src={OpenHighWireframe} alt="High fidelity wireframe" />
						</div>

						<div className="img-con-3">
							<img src={OpenBodyImg5} alt="Open Market" />
							<img src={OpenBodyImg6} alt="Open Market" />
						</div>
					</div>
					<div>
						<h2>DESIGN COMPONENT</h2>

						<p>
							We designed the component in reference to the other components in the environment. In terms
							of hierarchy and branding, size, type, elevation, and colour are the most important factors.
							The primary components should feel the most branded, while the subsidiary components should
							feel below or on par with one another. To specify how a component should be built and scaled,
							our design system provides spec'ing symbols such as spacers, centering, and tap targets. The
							user is informed of the component's status by state changes. They should have a similar
							appearance but be identifiable from one another.
						</p>
						<div className="design-component">
							<img src={OpenIcons} alt="Open market icons" />
							<img src={OpenUpload} alt="Open market uploads" />
							<img src={OpenInput} alt="Open market input" />
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Body;
