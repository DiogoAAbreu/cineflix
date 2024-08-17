
import GlobalStyle from "../globalStyles";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./Header";
import Home from "./Home";
import Filme from "./Filme";
import Sessao from "./Sessao";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:filmeId" element={<Filme />} />
        <Route path="/sessao/:sessaoId" element={<Sessao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
