import { Container, Card } from "react-bootstrap";
import Home from "./Home";
import { Link } from 'react-router-dom';
import FormQuiz from "../components/FormQuiz";
import FormTicket from "../components/FormTicket";
import Accordion from "../components/Accordion";
import Messenger from "../components/Messenger";


function Atividade5() {
  return  (
    <>
      <Home />
      <Container>
        <br></br>
        <Card style={{padding: "2rem"}}>
          <FormQuiz />
        </Card>
        <br></br>
        <Card style={{padding: "2rem"}}>
          <FormTicket />
        </Card>
        <br></br>
        <Card style={{padding: "2rem"}}>
          <Accordion />
        </Card>
        <br></br>
        <Card style={{padding: "2rem"}}>
          <Messenger />
        </Card>
      </Container>
    </>
  )
}

export default Atividade5;