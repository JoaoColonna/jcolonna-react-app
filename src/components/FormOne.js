import { useState } from "react";
import { Form, Select, Button, Card } from "react-bootstrap";

export default function Form1() {
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hello');

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        }, 5000);
    }

    return (
        <>
            <Card style={{padding: '2rem'}}>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>
                        To:{''}
                        <Form.Select 
                            value={to}
                            onChange={e => setTo(e.target.value)}>
                            <option value="Alice">Alice</option>
                            <option value="Bob">Bob</option>
                            </Form.Select>
                    </Form.Label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3}
                            placeholder="Message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Button type="submit">Send</Button>
                </Form>
            </Card>
        </>
    );
}