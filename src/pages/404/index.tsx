import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui';
import { Container } from './styles';
import { APP_ROUTES } from '../../constants';

const PageNotFound = () => {
	const navigate = useNavigate();

	return (
		<Container>
			<h2>
				<span>Oops!</span> Page not found
			</h2>

			<div>
				<Button variant="secondary" onClick={() => navigate(-1)}>
					Back
				</Button>
				<Button variant="primary" onClick={() => navigate(APP_ROUTES.home)}>
					Go Home
				</Button>
			</div>
		</Container>
	);
};

export default PageNotFound;
