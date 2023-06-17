import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	#root {
		height: 100vh;
		background-color: ${(props) => props.theme.background.root};
		transition: background 0.2s linear;
	}
`;

const lightTheme = {
	background: {
		activeLink: '#fff',
		root: '#fff',
	},
	color: '#000',
};

const darkTheme = {
	background: {
		activeLink: 'orange',
		root: '#292c35',
	},
	color: '#fff',
};

export default Global;
export { lightTheme, darkTheme };