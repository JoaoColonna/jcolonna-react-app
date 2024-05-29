import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Chat({ contact }) {
    const [text, setText] = useState('');
    return (
        <section className="chat">
            <Form.Control
                style={{ margin: "0.5rem" }}
                as="textarea" 
                value={text}
                placeholder={'Chat to ' + contact.name}
                onChange={e => setText(e.target.value)}
            />
            <br />
            <Button>Send to {contact.email}</Button>
        </section>
    );
}