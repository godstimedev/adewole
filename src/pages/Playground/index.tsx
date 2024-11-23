import { Button, Loader } from '../../ui';
import { Container, Flex } from './styles';
import { useNotify } from '../../hooks';

const Playground = () => {
	const notify = useNotify();

	return (
		<Container>
			<h1>App components</h1>
			<h3>Buttons</h3>
			<br />
			<Flex>
				<Flex $direction="column" $align="center">
					<Button size="large">Button</Button>

					<ul>
						<li>Props</li>
						<li>Variant: Primary (default)</li>
						<li>Size: Big</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Button variant="secondary">Button</Button>

					<ul>
						<li>Props</li>
						<li>Variant: Secondary</li>
						<li>Size: Medium (default)</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Button variant="subtle" size="small">
						Button
					</Button>

					<ul>
						<li>Props</li>
						<li>Variant: Subtle</li>
						<li>Size: Small</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Button variant="text">Button</Button>

					<ul>
						<li>Props</li>
						<li>Variant: Text</li>
						<li>Size: Medium (default)</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Button loading size="large">
						Button
					</Button>

					<ul>
						<li>Props</li>
						<li>Variant: Primary (default)</li>
						<li>Size: Big</li>
						<li>Loading</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Button variant="text" loading>
						Button
					</Button>

					<ul>
						<li>Props</li>
						<li>Variant: Text</li>
						<li>Size: Medium (default)</li>
						<li>Loading</li>
					</ul>
				</Flex>
			</Flex>
			<br />
			<br />

			<h3>Loader</h3>
			<br />
			<Flex>
				<Flex $direction="column" $align="center">
					<Loader />

					<ul>
						<li>Props</li>
						<li>Size: null (default)</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Loader size="2rem" />

					<ul>
						<li>Props</li>
						<li>Size: 2rem</li>
					</ul>
				</Flex>
			</Flex>
			<br />
			<br />

			<h1>Hooks</h1>
			<h3>useNotify</h3>
			<p>Click button to view effect</p>
			<br />
			<Flex>
				<Flex $direction="column" $align="center">
					<Button
						onClick={() =>
							notify({
								message: 'This is an example of an info toast',
								toastOptions: { toastId: 'playground_toast_info' },
							})
						}
					>
						Info
					</Button>

					<ul>
						<li>Props</li>
						<li>Message: 'This is an example toast'</li>
						<li>Status: info (default)</li>
						<li>Variant: major (default)</li>
						<li>ToastOptions: &#123; toastId: 'playground_toast_info' &#125;</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Button
						onClick={() =>
							notify({
								message: 'This is an example of a success toast',
								status: 'success',
								toastOptions: { toastId: 'playground_toast_success' },
							})
						}
					>
						Success
					</Button>

					<ul>
						<li>Props</li>
						<li>Message: 'This is an example of a success toast'</li>
						<li>Status: success</li>
						<li>Variant: major (default)</li>
						<li>ToastOptions: &#123; toastId: 'playground_toast_success' &#125;</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Button
						onClick={() =>
							notify({
								message: 'This is an example of an error toast',
								status: 'error',
								toastOptions: { toastId: 'playground_toast_error' },
							})
						}
					>
						Error
					</Button>

					<ul>
						<li>Props</li>
						<li>Message: 'This is an example of an error toast'</li>
						<li>Status: error</li>
						<li>Variant: major (default)</li>
						<li>ToastOptions: &#123; toastId: 'playground_toast_error' &#125;</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Button
						onClick={() =>
							notify({
								message: 'This is an example of a minor toast',
								variant: 'minor',
								toastOptions: { toastId: 'playground_toast_minor', position: 'bottom-center' },
							})
						}
					>
						Error
					</Button>

					<ul>
						<li>Props</li>
						<li>Message: 'This is an example of a minor toast'</li>
						<li>Status: info (default)</li>
						<li>Variant: minor</li>
						<li>
							ToastOptions: &#123; toastId: 'playground_toast_minor', position: 'bottom-center' &#125;
						</li>
					</ul>
				</Flex>
			</Flex>
			<br />
			<br />
		</Container>
	);
};

export default Playground;
