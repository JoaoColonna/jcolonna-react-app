import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Atividade1 from "../pages/Atividade1";
import Atividade2 from "../pages/Atividade2";
import Atividade3 from "../pages/Atividade3";
import Atividade4 from "../pages/Atividade4";
import Atividade5 from "../pages/Atividade5";

function MinhasRotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/atividade-1" element={<Atividade1 />}></Route>
        <Route path="/atividade-2" element={<Atividade2 />}></Route>
        <Route path="/atividade-3" element={<Atividade3 />}></Route>
        <Route path="/atividade-4" element={<Atividade4 />}></Route>
        <Route path="/atividade-5" element={<Atividade5 />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MinhasRotas;