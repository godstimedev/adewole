import { educationData, experienceData } from '../../../constants';
import { Accordion } from '../../../ui';
import { Container } from './styles';

const Resume = () => {
	return (
		<Container id="education">
			<h2 className="display2">Education & Experience</h2>

			<div className="resume">
				<div>
					<h3>Education</h3>
					<Accordion items={educationData} />
				</div>
				<div>
					<h3>Experience</h3>

					<Accordion items={experienceData} />
				</div>
			</div>
		</Container>
	);
};

export default Resume;
