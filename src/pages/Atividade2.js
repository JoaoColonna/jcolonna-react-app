import Home from './Home';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

const Counter = () => {
  const [total, setTotal] = useState(0);
  const [menCount, setMenCount] = useState(0);
  const [womenCount, setWomenCount] = useState(0);

  const handleIncrementMen = () => {
    if (total === 0 && menCount === 0) {
      return;
    }

    setTotal(total + 1);
    setMenCount(menCount + 1);
  };

  const handleDecrementMen = () => {
    if (menCount > 0) {
      setMenCount(menCount - 1);

      if (total > 0) {
        setTotal(total - 1);
      }
    }
  };

  const handleIncrementWomen = () => {
    if (total === 0 && womenCount === 0) {
      return;
    }

    setTotal(total + 1);
    setWomenCount(womenCount + 1);
  };

  const handleDecrementWomen = () => {
    if (womenCount > 0) {
      setWomenCount(womenCount - 1);

      if (total > 0) {
        setTotal(total - 1);
      }
    }
  };

  return (
    <>
    <Home />
      <Container>
        <Row className="justify-content-center mb-3">
          <Col xs={12} md={6} className="text-center">
            <Form.Label>Total</Form.Label>
            <Form.Control
              className="form-control mt-2 text-center"
              value={total}
              readOnly
            />
          </Col>
          <Col xs={12} md={6} className="text-center">
            <Button className="btn btn-secondary mt-2" onClick={() => {
              setTotal(0);
              setMenCount(0);
              setWomenCount(0);
            }}>
              Limpar
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-column align-items-center">
            <Image
              src="https://cdn-icons-png.freepik.com/512/4086/4086652.png"
              className="img-thumbnail"
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
            <div className="row">
              <Button
                className="col btn btn-primary mt-2 mr-2"
                onClick={handleIncrementMen}
              >
                +
              </Button>
              <Button
                className="col btn btn-danger mt-2"
                onClick={handleDecrementMen}
              >
                -
              </Button>
              <Form.Control
                className="form-control mt-2 text-center"
                value={menCount}
                readOnly
              />
            </div>
          </Col>

          <Col className="d-flex flex-column align-items-center">
            <Image
              src="https://cdn-icons-png.freepik.com/512/4086/4086671.png"
              className="img-thumbnail"
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
            <div className="row">
              <Button
                className="col btn btn-primary mt-2 mr-2"
                onClick={handleIncrementWomen}
              >
                +
              </Button>
              <Button
                className="col btn btn-danger mt-2"
                onClick={handleDecrementWomen}
              >
                -
              </Button>
              <Form.Control
                className="form-control mt-2 text-center"
                value={womenCount}
                readOnly
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Counter;
