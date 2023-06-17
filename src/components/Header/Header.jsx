import React, { useContext } from 'react';
import { HeaderStyled, AppName, NavLinkStyled, NavigationList } from './styled.js';
import Button from '../Button/Button.js';
import CustomThemeContext from '../../context/theme';

const Header = () => {
	const { toggleTheme } = useContext(CustomThemeContext);

	const navigationLinks = [
		{
			to: '/functional',
			dataCy: 'navlink-FC',
			buttonText: 'FC',
		},
		{
			to: '/class',
			dataCy: 'navlink-CC',
			buttonText: 'CC',
		},
	];

	return (
		<HeaderStyled>
			<AppName data-cy='app-name'>Calculator</AppName>
			<nav>
				<NavigationList>
					{navigationLinks.map(({ to, dataCy, buttonText }) => {
						return (
							<li key={to}>
								<NavLinkStyled to={to} data-cy={dataCy}>
									<Button>{buttonText}</Button>
								</NavLinkStyled>
							</li>
						);
					})}
				</NavigationList>
			</nav>
			<Button onClick={toggleTheme} data-cy='theme'>
				Change theme
			</Button>
		</HeaderStyled>
	);
};

export default Header;
