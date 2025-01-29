import {
	CashtellaBodyImg1,
	CashtellaBodyImg10,
	CashtellaBodyImg11,
	CashtellaBodyImg12,
	CashtellaBodyImg13,
	CashtellaBodyImg14,
	CashtellaBodyImg15,
	CashtellaBodyImg2,
	CashtellaBodyImg3,
	CashtellaBodyImg4,
	CashtellaBodyImg5,
	CashtellaBodyImg6,
	CashtellaBodyImg7,
	CashtellaBodyImg8,
	CashtellaBodyImg9,
} from '../../../assets/images';
import { Container } from './styles';

const Body = () => {
	return (
		<Container>
			<div className="wrapper">
				<div>
					<h2>
						Enabling businesses to perform timely local and <br /> cross-border payments
					</h2>

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
							<p>Figma and Miro</p>
						</div>
					</div>

					<div className="img-wrapper">
						<div className="img-con-1">
							<img src={CashtellaBodyImg1} alt="Cashtella mobile view" />
						</div>
						<div className="img-con-2">
							<img src={CashtellaBodyImg2} alt="Cashtella mobile view" />
						</div>
						<div className="img-con-1">
							<img src={CashtellaBodyImg3} alt="Cashtella mobile view" />
						</div>
					</div>
				</div>

				{/* section 2 */}
				<div>
					<div>
						<h2>TRANSFER DESIGNS</h2>

						<p>
							Easily manage your finances with our versatile transfer options. Send money securely to
							accounts at other banks, transfer funds conveniently using just a recipient's phone number or
							email address, or complete reliable international transfers to destinations overseas.
						</p>
					</div>

					<div>
						<div className="img-wrapper">
							<div className="img-con-1">
								<img src={CashtellaBodyImg4} alt="Cashtella" />
							</div>
							<div className="img-con-2">
								<img src={CashtellaBodyImg5} alt="Cashtella" />
							</div>
							<div className="img-con-1">
								<img src={CashtellaBodyImg6} alt="Cashtella" />
							</div>
							<div className="img-con-2">
								<img src={CashtellaBodyImg7} alt="Cashtella" />
							</div>
						</div>

						<div className="img-wrapper-mobile">
							<div className="img-con">
								<img src={CashtellaBodyImg4} alt="Cashtella" />
							</div>
						</div>
					</div>
				</div>

				{/* section 3 */}
				<div>
					<div className="img-wrapper">
						<div className="img-con-1">
							<img src={CashtellaBodyImg8} alt="Cashtella mobile view" />
						</div>
						<div className="img-con-2">
							<img src={CashtellaBodyImg9} alt="Cashtella mobile view" />
						</div>
						<div className="img-con-1 non">
							<img src={CashtellaBodyImg10} alt="Cashtella mobile view" />
						</div>
						<div className="img-con-2">
							<img src={CashtellaBodyImg11} alt="Cashtella mobile view" />
						</div>
					</div>
				</div>

				{/* section 4 */}
				<div>
					<div>
						<h2>REMMITANCE</h2>

						<p>
							We offer secure and efficient remittance services, enabling fast and reliable transfers to
							other companies worldwide. Simplify your business payments with ease and confidence.
						</p>
					</div>

					<div>
						<div className="img-wrapper">
							<div className="img-con-1">
								<img src={CashtellaBodyImg12} alt="Cashtella" />
							</div>
							<div className="img-con-2">
								<img src={CashtellaBodyImg13} alt="Cashtella" />
							</div>
							<div className="img-con-1">
								<img src={CashtellaBodyImg14} alt="Cashtella" />
							</div>
							<div className="img-con-2">
								<img src={CashtellaBodyImg15} alt="Cashtella" />
							</div>
						</div>

						<div className="img-wrapper-mobile">
							<div className="img-con">
								<img src={CashtellaBodyImg12} alt="Cashtella" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Body;
