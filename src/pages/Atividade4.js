import { Container, Row, Col, Card } from "react-bootstrap";
import Home from "./Home";
import Events from "../components/Events";
import Gallery2 from "../components/GalleryTwo";
import ShapeEditor from "../components/ShapeEditor";
import Counter from "../components/Counter";
import Form1 from "../components/FormOne";
import Form2 from "../components/FormTwo";
import Form3 from "../components/FormThree";
import MovingDot from "../components/MovingDot";
import List1 from "../components/ListOne";
import List2 from "../components/ListTwo";
import List3 from "../components/ListThree";
import List4 from "../components/ListFour";
import CounterList from "../components/CounterList";
import BucketList from "../components/BucketList";

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
        <Card style={{padding: "2rem", height: "15rem"}}>
          <ShapeEditor />
        </Card>
        <br></br>
          <Counter />
        <br></br>
          <Form1 />
        <br></br>
        <Card style={{padding: "2rem", height: "15rem"}}>
          <ShapeEditor />
        </Card>
        <br></br>
        <Card style={{ }}>
          <MovingDot />
        </Card>
        <br></br>
        <Card style={{padding: "2rem"}}>
          <Form2 />
        </Card>
        <br></br>
        <Card style={{padding: "2rem"}}>
          <Form3 />
        </Card>
        <br></br>
        <Card style={{padding: "2rem"}}>
          <List1 />
        </Card>
        <br></br>
        <Card style={{padding: "2rem"}}>
          <List2 />
        </Card>
        <br></br>
        <Card style={{padding: "2rem"}}>
          <CounterList />
        </Card>
        <br></br>
        <Card style={{padding: "2rem"}}>
          <List3 />
        </Card>
        <br></br>
        <Card style={{padding: "2rem"}}>
          <List4 />
        </Card>
        <br></br>
        <Card style={{padding: "2rem"}}>
          <BucketList />
        </Card>
      </Container>
    </>
  )
}

export default Atividade4;