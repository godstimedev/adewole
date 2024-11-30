import { Link } from 'react-router-dom';
import { ProjectCard } from '../../../components';
import { projectsData } from '../../../constants';
import { Container } from './styles';
import { motion } from 'motion/react';

const itemVariant = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
	},
};

const Projects = () => {
	return (
		<Container id="case-studies">
			<h2 className="display2">Projects</h2>

			<motion.div
				variants={{
					hidden: { opacity: 0 },
					show: {
						opacity: 1,
						transition: {
							staggerChildren: 0.25,
						},
					},
				}}
				initial={'hidden'}
				animate={'show'}
				className="projects"
			>
				{projectsData.map((project) => (
					<motion.div variants={itemVariant} key={project.id}>
						<Link to={project.link}>
							<ProjectCard
								title={project.title}
								subTitle={project.subTitle}
								logo={project.logo}
								tags={project.tags}
								img={project.img}
							/>
						</Link>
					</motion.div>
				))}
			</motion.div>
		</Container>
	);
};

export default Projects;
