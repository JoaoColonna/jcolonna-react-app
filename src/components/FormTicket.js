import { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function FormTicket() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    return (
        <>
            <Form>
                <h2>Let's check you in</h2>
                <Form.Group>
                    <Form.Label>
                        First name:{' '}
                    </Form.Label>
                    <Form.Control 
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Last name:{' '}
                    </Form.Label>
                    <Form.Control 
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                </Form.Group>
                <p>
                    Your ticket will be issued to: <b>{fullName}</b>
                </p>
            </Form>
        </>
    );
}