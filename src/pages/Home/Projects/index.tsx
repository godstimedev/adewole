import { Link } from 'react-router-dom';
import { ProjectCard } from '../../../components';
import { projectsData } from '../../../constants';
import { Container } from './styles';

const Projects = () => {
	return (
		<Container>
			<h2 className="display2">Projects</h2>

			<div className="projects">
				{projectsData.map((project) => (
					<Link to={project.link} key={project.id}>
						<ProjectCard
							title={project.title}
							subTitle={project.subTitle}
							logo={project.logo}
							tags={project.tags}
							img={project.img}
						/>
					</Link>
				))}
			</div>
		</Container>
	);
};

export default Projects;
