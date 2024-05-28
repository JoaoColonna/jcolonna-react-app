import { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';

let nextId = 3;
const initialList = [
    { id: 0, title: 'Big Bellies' },
    { id: 1, title: 'Lunar Landscape' },
    { id: 2, title: 'Terracotta Army' }
];

export default function List4() {
    const [list, setList] = useState(initialList);

    function handleCLick() {
        const nextList = [...list];
        nextList.reverse();
        setList(nextList);
    }

    return (
        <>
            <Button onClick={handleCLick}>
                Reverse
            </Button>
            <Nav className='flex-column'>
                {list.map(artwork => (
                    <Nav.Item key={artwork.id}>{artwork.title}</Nav.Item>
                ))}
            </Nav>
        </>
    );
}