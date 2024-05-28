import { useState } from "react";
import { sculptureList } from "./Data";
import { Button, Card, Row, Col, Image } from "react-bootstrap";

// import Image from "react-bootstrap";

export default function Gallery2() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        if(index < sculptureList.length-1){
            setIndex(index + 1);
        } else {
            setIndex(index - index);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    console.log(sculpture);
    return (
        <>
          <Card style={{ padding: "2rem "}}>
            <Card.Body>
                <Row>
                    <Col>
                        <Button onClick={handleNextClick}>
                        Next
                        </Button>
                    </Col>
                    <h4>
                        <i>{sculpture.name}</i>
                        by {sculpture.artist}
                    </h4>
                    <h5>
                        ({index + 1} of {sculptureList.length})
                    </h5>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={handleMoreClick}>
                            {showMore ? 'Hide' : 'Show'} details
                        </Button>
                    </Col>
                    <Col>
                        <Image 
                            src={sculpture.url}
                            alt={sculpture.alt}
                        />
                        <img src={sculpture.url} ></img>
                    </Col>
                    <Col>
                        {showMore && <p>{sculpture.description}</p>}
                    </Col>

                </Row>
            </Card.Body>
          </Card>
        </>
    );
}