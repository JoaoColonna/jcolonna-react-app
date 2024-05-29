import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function FormQuiz() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>That's right!</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    return (
        <>
            <h2>City quiz</h2>
            <Form.Text>
                In which city is there a billboard that turns air into drinkable water?
            </Form.Text>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control 
                        as="textarea"
                        value={answer}
                        onChange={handleTextareaChange}
                        disabled={status === 'submitting'}
                    />
                </Form.Group>
                <br />
                <Button disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                }>
                    Submit
                </Button>
                {error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                }
            </Form>
        </>
    );
}

function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima'
            if (shouldError) {
                reject(new Error('Try again!'));
            } else {
                resolve();
            }
        }, 1500);
    })
}