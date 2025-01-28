import { ClientCard } from '../../../components';
import { clientData } from '../../../constants/clientData';
import { Container } from './styles';

const Clients = () => {
	return (
		<Container id="clients">
			<h2 className="display2">Featured Clients</h2>

			<div className="clients">
				{clientData.map((client, index) => (
					<ClientCard
						key={index}
						img={client.img}
						job={client.job}
						company={client.company}
						description={client.description}
						link={client.link}
					/>
				))}
			</div>
		</Container>
	);
};

export default Clients;
