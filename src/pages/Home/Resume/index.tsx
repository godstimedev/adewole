import { Accordion } from '../../../ui';
import { Container } from './styles';

const Resume = () => {
	return (
		<Container>
			<h2 className="display2">Resume</h2>

			<div className="resume">
				<div>
					<h3>Education</h3>
					<Accordion
						items={[
							{
								title: 'Teesside University',
								content: (
									<div className="content">
										<div>
											<h5>IT Project Management</h5>

											<span>2021 -2023</span>
										</div>

										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut
											labore et dolore magna aliqua.
										</p>
									</div>
								),
							},
							{
								title: 'Udacity - Business',
								content: (
									<div className="content">
										<div>
											<h5>IT Project Management</h5>

											<span>2021 -2023</span>
										</div>

										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut
											labore et dolore magna aliqua.
										</p>
									</div>
								),
							},
							{
								title: 'Covenant University',
								content: (
									<div className="content">
										<div>
											<h5>IT Project Management</h5>

											<span>2021 -2023</span>
										</div>

										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut
											labore et dolore magna aliqua.
										</p>
									</div>
								),
							},
						]}
					/>
				</div>
				<div>
					<h3>Experience</h3>

					<Accordion
						items={[
							{
								title: 'Teesside University',
								content: (
									<div className="content">
										<div>
											<h5>IT Project Management</h5>

											<span>2021 -2023</span>
										</div>

										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut
											labore et dolore magna aliqua.
										</p>
									</div>
								),
							},
							{
								title: 'Udacity - Business',
								content: (
									<div className="content">
										<div>
											<h5>IT Project Management</h5>

											<span>2021 -2023</span>
										</div>

										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut
											labore et dolore magna aliqua.
										</p>
									</div>
								),
							},
							{
								title: 'Covenant University',
								content: (
									<div className="content">
										<div>
											<h5>IT Project Management</h5>

											<span>2021 -2023</span>
										</div>

										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut
											labore et dolore magna aliqua.
										</p>
									</div>
								),
							},
						]}
					/>
				</div>
			</div>
		</Container>
	);
};

export default Resume;
