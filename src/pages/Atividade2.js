import Home from "./Home";
import {Container, Row, Col, Button} from 'react-bootstrap';
import { useState } from "react";

function Atividade2() {

  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const incrementarHomens = () => setHomens(homens + 1);
  const decrementarHomens = () => setHomens(homens > 0 ? homens - 1 : 0);

  const incrementarMulheres = () => setMulheres(mulheres + 1);
  const decrementarMulheres = () => setMulheres(mulheres > 0 ? mulheres - 1 : 0);

  const total = homens + mulheres;

    return  (
      <>
        <Home />
    <Container className="mt-5">
      <h1 className="text-center mb-4">Contador de Pessoas</h1>

      <Row className="mb-3">
        <Col className="text-center">
          <h2>Homens: {homens}</h2>
          <Button variant="danger" className="me-2" onClick={decrementarHomens}>-</Button>
          <Button variant="success" onClick={incrementarHomens}>+</Button>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col className="text-center">
          <h2>Mulheres: {mulheres}</h2>
          <Button variant="danger" className="me-2" onClick={decrementarMulheres}>-</Button>
          <Button variant="success" onClick={incrementarMulheres}>+</Button>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <h2>Total: {total}</h2>
        </Col>
      </Row>
    </Container>
      </>
    );
  }
  
  // export default ContadorPessoas;
  export default Atividade2;

          // src/App.js
// import React, { useState } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import './App.css';

// function ContadorPessoas() {
//   const [homens, setHomens] = useState(0);
//   const [mulheres, setMulheres] = useState(0);

//   const incrementarHomens = () => setHomens(homens + 1);
//   const decrementarHomens = () => setHomens(homens > 0 ? homens - 1 : 0);

//   const incrementarMulheres = () => setMulheres(mulheres + 1);
//   const decrementarMulheres = () => setMulheres(mulheres > 0 ? mulheres - 1 : 0);

//   const total = homens + mulheres;