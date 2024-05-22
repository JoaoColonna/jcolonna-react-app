import { Container, Row, Col, Card } from "react-bootstrap";
import Home from "./Home";
import Events from "../components/Events";
import Gallery2 from "../components/GalleryTwo";

function Atividade4() {
  return  (
    <>
      <Home />
      <Container>
        <br></br>
        <Card style={{padding: "2rem"}}>
          <Events />
        </Card>
        <br></br>
        <Gallery2 />
        <br></br>
        <Card style={{padding: "2rem"}}>
        </Card>
      </Container>
    </>
  )
}

export default Atividade4;