import { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function Form2() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    function handleFirstNameChange(e) {
        setPerson({
            ...person,
            firstName: e.target.value
        });
    }

    function handleLastNameChange(e) {
        setPerson({
            ...person,
            lastName: e.target.value
        });
    }

    function handleEmailChange(e) {
        setPerson({
            ...person,
            email: e.target.value
        });
    }

    return (
        <>
            <Form.Label>
                First name:
                <Form.Control
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </Form.Label>
            <Form.Label>
                Last name:
                <Form.Control 
                    value={person.lastName}
                    onChange={handleLastNameChange}
                />
            </Form.Label>
            <Form.Label>
                Email:
                <Form.Control 
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </Form.Label>
            <p>
                {person.firstName}{''}
                {person.lastName}{''}
                ({person.email})
            </p>
        </>
    );
}