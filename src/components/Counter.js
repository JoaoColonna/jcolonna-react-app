import { useState } from "react";
import { Button, Card, Row } from "react-bootstrap";

export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <Card style={{padding: "2rem"}}>
                <Card.Body>
                    <Row>
                        <h1>{number}</h1>
                    </Row>
                    <Button onClick={() => {
                        setNumber(n => n + 1);
                        setNumber(n => n + 1);
                        setNumber(n => n + 1);
                        }}>+3
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
}