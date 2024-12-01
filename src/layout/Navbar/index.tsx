import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ArrowBack, File, Logo, MenuIcon, NavClose } from '../../assets/svgs';
import { Button } from '../../ui';
import { Container } from './styles';
import { useEffect, useState } from 'react';
import { APP_ROUTES } from '../../constants';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		setIsOpen(false);
	}, [location.hash, location.pathname, setIsOpen]);

	return (
		<Container $location={!location.pathname.endsWith('/') ? 'other' : 'default'}>
			<nav>
				<button className="back" onClick={() => navigate(-1)}>
					<ArrowBack />
				</button>

				<NavLink to={'/'} className="logo">
					<Logo />
				</NavLink>

				<ul>
					<li>
						<NavLink to={`${APP_ROUTES.home}#education`}>Education</NavLink>{' '}
					</li>
					<li>
						{' '}
						<NavLink to={`${APP_ROUTES.home}#case-studies`}>Case studies</NavLink>
					</li>
					{/* <a href="/cv.pdf" download="Adewole_CV.pdf"> */}
					<Button>
						<File />
						Download CV
					</Button>
					{/* </a> */}
				</ul>

				<button className="menu" onClick={() => setIsOpen(true)}>
					<MenuIcon />
				</button>

				<div className={`${isOpen ? 'show' : 'close'} mobile-nav`}>
					<div>
						<div>
							<NavLink to={'/'} className="logo">
								<Logo />
							</NavLink>
							<button className="menu" onClick={() => setIsOpen(false)}>
								<NavClose />
							</button>
						</div>

						<ul>
							<li>
								<NavLink to={`${APP_ROUTES.home}#education`}>Education</NavLink>{' '}
							</li>
							<li>
								{' '}
								<NavLink to={`${APP_ROUTES.home}#case-studies`}>Case studies</NavLink>
							</li>
							{/* <a href="/cv.pdf" download="Adewole_CV.pdf"> */}
							<Button>
								<File />
								Download CV
							</Button>
							{/* </a> */}
						</ul>
					</div>
				</div>
			</nav>
		</Container>
	);
};

export default Navbar;
