import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px;
	background: ${props => props.theme.background}
	color: ${props => props.theme.color};
	transition: background 0.2s linear;
`
export const AppName = styled.span`
	font-size: 22px;
	font-weight: bold;
`

export const NavigationList = styled.ul`
	list-style: none;
	display: flex;
`

export const NavLinkStyled = styled(NavLink)`
	text-decoration: none;
	& button {
		font-size: 18px;
	}
	&.active button {
		background: ${props => props.theme.background.activeLink};
	}
`