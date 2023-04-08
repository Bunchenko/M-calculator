import React, { useContext } from 'react';
import { HeaderStyled, AppName, NavLinkStyled, UList } from './styled.js';
import Button from '../Button/Button.js';
import CustomThemeContext from '../../context/theme';

const Header = () => {
	const { toggleTheme } = useContext(CustomThemeContext);

	return (
		<HeaderStyled>
			<AppName>Calculator</AppName>
			<nav>
				<UList>
					<li>
						<NavLinkStyled to='/functional'>
							<Button>FC</Button>
						</NavLinkStyled>
					</li>
					<li>
						<NavLinkStyled to='/class'>
							<Button>CC</Button>
						</NavLinkStyled>
					</li>
				</UList>
			</nav>
			<Button onClick={toggleTheme}>Change theme</Button>
		</HeaderStyled>
	);
};

export default Header;
