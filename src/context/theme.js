import { createContext, useState } from "react";

const CustomThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
		<CustomThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</CustomThemeContext.Provider>
	)
}

export { ThemeContextProvider }
export default CustomThemeContext;