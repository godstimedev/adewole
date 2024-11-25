import { Container } from './styles';

type ProjectBarProps = {
	title: string;
	subTitle: string;
	logo: string;
	tags: string[];
};

const ProjectBar = (props: ProjectBarProps) => {
	const { title, subTitle, logo, tags } = props;

	return (
		<Container>
			<div className="img-con">
				<img src={logo} alt={`${title} logo`} />
			</div>
			<div>
				<h3>
					{title}- <span>{subTitle}</span>
				</h3>
				<ul>
					{tags.map((tag, index) => (
						<li key={index}>{tag}</li>
					))}
				</ul>
			</div>
		</Container>
	);
};

export default ProjectBar;
