import { ProjectBar } from '../../ui';
import { Container } from './styles';

type PropsType = {
	title: string;
	subTitle: string;
	logo: string;
	tags: string[];
	img: string;
};

const ProjectCard = (props: PropsType) => {
	const { title, subTitle, logo, img, tags } = props;
	return (
		<Container>
			<ProjectBar title={title} subTitle={subTitle} logo={logo} tags={tags} />
			<img src={img} alt="/" />
		</Container>
	);
};

export default ProjectCard;
