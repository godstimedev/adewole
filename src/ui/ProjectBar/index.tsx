import { Container } from './styles';

type ProjectBarProps = {
	title: string;
	subTitle: string;
	img: string;
	tags: string[];
};

const ProjectBar = (props: ProjectBarProps) => {
	const { title, subTitle, img, tags } = props;

	return (
		<Container>
			<div className="img-con">
				<img src={img} alt={`${title} logo`} />
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
