import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<span>Calculator App</span>
			<nav>
				<ul>
					<li>
						<NavLink to='/functional'>FC</NavLink>
					</li>
					<li>
						<NavLink to='/class'>CC</NavLink>
					</li>
				</ul>
			</nav>
			<span>Theme changer</span>
		</header>
	);
};

export default Header;
