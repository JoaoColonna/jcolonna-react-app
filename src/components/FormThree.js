import { useState } from 'react';
import { Form, Image, Row } from 'react-bootstrap';

export default function Form3() {
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg'
        }
    });

    function handleNameChange(e) {
        setPerson({
            ...person,
            name: e.target.value
        });
    }

    function handleTitleChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        });
    }

    function handleCityChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }
        });
    }

    function handleImageChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }
        });
    }

    return (
        <>
            <Form.Label>
                Name:
                <Form.Control 
                    value={person.name}
                    onChange={handleNameChange}
                />
            </Form.Label>
            <Form.Label>
                Title:
                <Form.Control 
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </Form.Label>
            <Form.Label>
                City:
                <Form.Control 
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </Form.Label>
            <Form.Label>
                Image:
                <Form.Control 
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
            </Form.Label>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p> 
            <Image
                src={person.artwork.image}
                alt={person.artwork.title}
            />
        </>
    )
}