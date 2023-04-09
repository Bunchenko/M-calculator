import React, { useContext } from 'react';
import { HeaderStyled, AppName, NavLinkStyled, UList } from './styled.js';
import Button from '../Button/Button.js';
import CustomThemeContext from '../../context/theme';

const Header = () => {
	const { toggleTheme } = useContext(CustomThemeContext);

	return (
		<HeaderStyled>
			<AppName data-cy='app-name'>Calculator</AppName>
			<nav>
				<UList>
					<li>
						<NavLinkStyled to='/functional' data-cy='navlink-FC'>
							<Button>FC</Button>
						</NavLinkStyled>
					</li>
					<li>
						<NavLinkStyled to='/class' data-cy='navlink-CC'>
							<Button>CC</Button>
						</NavLinkStyled>
					</li>
				</UList>
			</nav>
			<Button onClick={toggleTheme} data-cy='theme'>
				Change theme
			</Button>
		</HeaderStyled>
	);
};

export default Header;
