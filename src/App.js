import { EscolaProvider } from "common/context/Escola";
import Edificio from "pages/Edificio.jsx";
import Escola from "pages/Escola";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <EscolaProvider>
        <Routes>
          <Route path="/" element={<Escola />} />
          <Route path="/edificio" element={<Edificio />} />
        </Routes>
      </EscolaProvider>
    </BrowserRouter>
  );
}
