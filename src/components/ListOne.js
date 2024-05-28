import { useState } from 'react';
import { Button, Form, Nav } from 'react-bootstrap';

let nextId = 0;

export default function List1() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return (
        <>
            <Form>
                <h1>Inspiring sculptors:</h1>
                <Form.Control 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Button onClick={() => {
                    setArtists(
                        [
                            ...artists,
                            { id: nextId++, name: name }
                        ]
                    );
                }}>Add</Button>
                <Nav.Item>
                    {artists.map(artist => (
                        <li key={artist.id}>{artist.name}</li>
                    ))}
                </Nav.Item>
            </Form>
        </>
    );
}