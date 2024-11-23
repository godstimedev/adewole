import { NavLink } from 'react-router-dom';
import { File, Logo, MenuIcon, NavClose } from '../../assets/svgs';
import { Button } from '../../ui';
import { Container } from './styles';
import { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Container>
			<nav>
				<NavLink to={'/'}>
					<Logo />
				</NavLink>

				<ul>
					<li>
						<NavLink to={'/'}>Education</NavLink>{' '}
					</li>
					<li>
						{' '}
						<NavLink to={'/'}>Case studies</NavLink>
					</li>
					<Button>
						<File />
						Download CV
					</Button>
				</ul>

				<button className="menu" onClick={() => setIsOpen(true)}>
					<MenuIcon />
				</button>

				<div className={`${isOpen ? 'show' : 'close'} mobile-nav`}>
					<div>
						<NavLink to={'/'}>
							<Logo />
						</NavLink>
						<button className="menu" onClick={() => setIsOpen(false)}>
							<NavClose />
						</button>
					</div>

					<ul>
						<li>
							<NavLink to={'/'}>Education</NavLink>{' '}
						</li>
						<li>
							{' '}
							<NavLink to={'/'}>Case studies</NavLink>
						</li>
						<Button>
							<File />
							Download CV
						</Button>
					</ul>
				</div>
			</nav>
		</Container>
	);
};

export default Navbar;
