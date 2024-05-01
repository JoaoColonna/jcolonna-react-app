import Home from "./Home";
import Clock from "../components/Clock";
import Letreiro from "../components/Letreiro";
// import { Link } from "react-router-dom";

function Atividade1() {
  return  (
    <>
      <Home />
      <h2>
        {/* <Link to="/">Retornar a página inicial</Link> */}
        <br />
        <Clock />
        <Letreiro />
      </h2>
    </>
  )
}

export default Atividade1;