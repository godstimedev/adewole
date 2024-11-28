import {
	DescinderBodyImg1,
	DescinderBodyImg2,
	DescinderBodyImg3,
	DescinderBodyImg4,
	DescinderBodyImg5,
	DescinderFlowDiagram,
	DescinderLogoConcept,
	DescinderLogoConceptMobile,
	DescinderSiteMapping,
	DesignManagementProcess,
	DesignManagementProcessMobile,
} from '../../../assets/images';
import { Container } from './styles';

const Body = () => {
	return (
		<Container>
			<div>
				<h2>
					Fueling Start-Ups & SMEs with Eager Interns and Graduates, to drive growth and empower
					Innovation.
				</h2>

				<div className="middle">
					<div>
						<h3>Project Duration</h3>
						<ul>
							<li>June 2022 - Till Date</li>
							<li>1 Year 10 Months</li>
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
						<img src={DescinderBodyImg1} alt="Descinder app desktop view" />
					</div>
					<div className="img-con">
						<img src={DescinderBodyImg2} alt="Descinder app mobile view" />
					</div>
				</div>

				<div>
					<div>
						<h3>Challenge</h3>
						<p>
							Descinder face the challenges to bridging the gap between business (Start-up & SMEs) and
							Early Career Individuals (Interns & Fresh Graduate) from all institution on a platform to
							create innovative solutions for business and also giver early career individuals to get their
							first time real job experience.
						</p>
						<p>
							{' '}
							So we are dare with the challenge of creating a user centric solution that cut across these
							three Actors (Users) while considering building a seamless and user-friendly web application
						</p>
					</div>
					<div>
						<h3>Solution</h3>
						<p>
							To address Descinder's challenge of uniting businesses and early-career individuals on a
							user-friendly platform, the best strategy is a comprehensive UX design. Prioritize a seamless
							interface, ensuring accessibility and ease of use for businesses, interns, and fresh
							graduates.
						</p>
						<p>
							Tailor the platform to meet the unique needs of each user group while fostering
							collaboration. Establishing an innovative ecosystem hinges on a thoughtful blend of
							user-centric design and a brand persona that resonates with both businesses and aspiring
							professionals.
						</p>
					</div>
				</div>
			</div>

			{/* section 2 */}
			<div>
				<div>
					<h2>DESIGN MANAGEMENT PROCESS</h2>

					<div className="img-con">
						<img src={DesignManagementProcess} alt="Design management process" />
					</div>
					<div className="img-con-mobile">
						<img src={DesignManagementProcessMobile} alt="Design management process" />
					</div>
				</div>

				<div>
					<div>
						<h3>DISCOVER & UNDERSTAND USERS</h3>
						<p>
							We prioritised user-centric design to connect businesses with early-career individuals,
							fostering collaboration and innovation for startups, SMEs, interns, and graduates.
						</p>
						<div className="flow">
							<span>START_UP + SMEs + INTERNS + GRADUATE</span>
						</div>
					</div>
					<div>
						<h3>CONCEPT TESTING</h3>
						<p>
							During this phase, we sketched the user interface and experience to test and understand the
							best user behavior for the product concept.
						</p>
						<div className="flow">
							<span>CRAZY EIGHT (8) SKETCHES</span>
						</div>
					</div>
					<div>
						<h3>DEFINE PRODUCT & SCOPE</h3>
						<p>
							To define our product, we meticulously crafted a user journey map, user flow, and site map.
							This ensures a coherent usability flow for all users and actors on the platform, contributing
							to the creation of a user-friendly and user-centric solution.
						</p>
						<div className="flow">
							<span>USER FLOW DIAGRAM + SITE MAP</span>
						</div>
					</div>
					<div>
						<h3>DESIGN LAYOUTS & INTERACTIONS</h3>
						<p>
							Created low-fidelity wireframes and a style guide for a clean design layout. Checked user
							interface navigation between screens for a clean user interaction. Also Conducted card
							sorting exercises to understand user expectations.
						</p>
						<div className="flow">
							<span>LOW FIDELITY WIREFRAME TEST + CARD SORTING EXERCISES</span>
						</div>
					</div>
				</div>
			</div>

			{/* section 3 */}
			<div>
				<div className="img-con">
					<img src={DescinderBodyImg3} alt="Descinder app mobile view" />
				</div>
				<div className="img-con">
					<img src={DescinderBodyImg4} alt="Descinder app desktop view" />
				</div>
			</div>

			<div className="logo-concept-mobile">
				<h2> LOGO CONCEPTUALISATION</h2>
				<p>
					The first phase is the understanding phase, where you understand the user first, Market &
					Business needs for the product. To understand the users, i conducted a research, interview
					(Both Physically & Virtual) , also by using questionnaires when necessary. From the interview i
					created personas for the users.{' '}
				</p>
				<div className="img-con">
					<img src={DescinderLogoConceptMobile} alt="Descinder app logo conceptualisation" />
				</div>
			</div>
			{/* section 4 */}
			<div>
				<div>
					<h2> USER FLOW DIAGRAM</h2>

					<div className="img-con">
						<img src={DescinderFlowDiagram} alt="Descinder app flow diagram" />
					</div>
				</div>
				<div>
					<h2> SITE MAPPING (SMEs & START-UP)</h2>

					<div className="img-con">
						<img src={DescinderSiteMapping} alt="Descinder app site mapping" />
					</div>
				</div>
				<div>
					<h2> LOGO CONCEPTUALISATION</h2>

					<p>
						The first phase is the understanding phase, where you understand the user first, Market &
						Business needs for the product. To understand the users, i conducted a research, interview
						(Both Physically & Virtual) , also by using questionnaires when necessary. From the interview
						i created personas for the users.{' '}
					</p>

					<div className="img-con">
						<img src={DescinderLogoConcept} alt="Descinder app logo conceptualisation" />
					</div>
				</div>
				<div className="bg"></div>
				<div>
					<h2> MOBILE RESPONSIVENESS</h2>

					<p>
						The first phase is the understanding phase, where you understand the user first, Market &
						Business needs for the product. To understand the users, i conducted a research, interview
						(Both Physically & Virtual) , also by using questionnaires when necessary. From the interview
						i created personas for the users.{' '}
					</p>
					<div className="img-con">
						<img src={DescinderBodyImg5} alt="Descinder app mobile responsiveness" />
					</div>
				</div>
				<div className="bg-2"></div>
			</div>
		</Container>
	);
};

export default Body;
