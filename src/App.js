import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header/Header";
import CalculatorPage from "./pages/CalculatorPage";
import CalculatorClassPage from "./pages/CalculatorClassPage";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CalculatorPage />} />
        <Route path="functional" element={<CalculatorPage />} />
        <Route path="class" element={<CalculatorClassPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
