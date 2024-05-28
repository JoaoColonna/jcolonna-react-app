import { useState } from 'react';
import { Nav, Form, Button } from 'react-bootstrap';

let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson' }
];

export default function List2() {
    const [artists, setArtists] = useState(
        initialArtists
    );

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <Nav className='flex-column'>
                {artists.map(artist => (
                    <Nav.Item key={artist.id} style={{margin: "0.5rem"}}>
                        {artist.name}{''}
                        <Button onClick={() => {
                            setArtists(
                                artists.filter(a =>
                                    a.id !== artist.id
                                )
                            );
                        }}>
                            Delete
                        </Button>
                        </Nav.Item>
                ))}
            </Nav>

        </>
    );
}