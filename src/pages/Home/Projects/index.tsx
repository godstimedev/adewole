import { Cyberspace, DescinderLogo, Dot, InterswitchLogo } from '../../../assets/images';
import { ProjectBar } from '../../../ui';
import { Container } from './styles';

const Projects = () => {
	return (
		<Container>
			<h2 className="display2">Projects</h2>

			<div className="projects">
				{projects.map((project) => (
					<ProjectBar
						key={project.id}
						title={project.title}
						subTitle={project.subTitle}
						img={project.img}
						tags={project.tags}
					/>
				))}
			</div>
		</Container>
	);
};

export default Projects;

const projects = [
	{
		id: 1,
		title: 'Descinder ',
		subTitle: 'Human Resourcing',
		img: DescinderLogo,
		tags: ['Strategy', 'Brand Identity', 'Creative Direction', 'Digital Design'],
	},
	{
		id: 2,
		title: 'DOT.AI ',
		subTitle: 'Agency Banking',
		img: Dot,
		tags: ['Strategy', 'Brand Identity', 'Creative Direction', 'Digital Design'],
	},
	{
		id: 3,
		title: 'Interswitch ',
		subTitle: 'Payment Gateway ',
		img: InterswitchLogo,
		tags: ['Strategy', 'Brand Identity', 'Creative Direction', 'Digital Design'],
	},
	{
		id: 4,
		title: 'Cyberspace ',
		subTitle: 'IT consulting',
		img: Cyberspace,
		tags: ['Strategy', 'Brand Identity', 'Creative Direction', 'Digital Design'],
	},
];
