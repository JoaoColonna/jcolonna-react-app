import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Atividade1 from "../pages/Atividade1";
import Atividade2 from "../pages/Atividade2";
import Atividade3 from "../pages/Atividade3";

function MinhasRotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/atividade-1" element={<Atividade1 />}></Route>
        <Route path="/atividade-2" element={<Atividade2 />}></Route>
        <Route path="/atividade-3" element={<Atividade3 />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MinhasRotas;