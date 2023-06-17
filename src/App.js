import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header/Header";
import CalculatorPage from "./pages/CalculatorPage";
import CalculatorClassPage from "./pages/CalculatorClassPage";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import CustomThemeContext from "./context/theme";
import Global, { darkTheme, lightTheme } from "./globalStyles";
import routes from "./constants/routes";

const routeComponents = [
  {
    path: routes.home,
    element: <CalculatorPage />
  },
  {
    path: routes.functionalComponents,
    element: <CalculatorPage />
  },
  {
    path: routes.classComponents,
    element: <CalculatorClassPage />
  },
  {
    path: routes.error,
    element: <ErrorPage />
  }
]

function App() {
  const { theme } = useContext(CustomThemeContext)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Global />
      <BrowserRouter>
        <Header />
        <Routes>
          {routeComponents.map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />
          })}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
