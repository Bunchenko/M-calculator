import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header/Header";
import CalculatorPage from "./pages/CalculatorPage";
import CalculatorClassPage from "./pages/CalculatorClassPage";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useContext } from "react";
import CustomThemeContext from "./context/theme";

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

function App() {
  const { theme } = useContext(CustomThemeContext)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Global />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CalculatorPage />} />
          <Route path="functional" element={<CalculatorPage />} />
          <Route path="class" element={<CalculatorClassPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
