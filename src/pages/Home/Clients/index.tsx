import { ClientCard } from '../../../components';
import { clientData } from '../../../constants/clientData';
import { Container } from './styles';

const Clients = () => {
	return (
		<Container>
			<h2 className="display2">Featured Clients</h2>

			<div className="clients">
				{clientData.map((client, index) => (
					<ClientCard
						key={index}
						img={client.img}
						job={client.job}
						company={client.company}
						description={client.description}
					/>
				))}
			</div>
		</Container>
	);
};

export default Clients;
