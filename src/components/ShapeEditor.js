import { useState } from "react";
import { Button, Card } from "react-bootstrap";

let initialShapes = [
    { id: 0, type: 'circle', x: 150, y: 60},
    { id: 1, type: 'square', x: 250, y: 60},
    { id: 2, type: 'circle', x: 350, y: 60}
];

export default function ShapeEditor() {
    const [shapes, setShapes] = useState(
        initialShapes
    );

    function handleClick() {
        const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
                return shape;
            } else if (shape.y < 160) {
                return {
                    ...shape,
                    y: shape.y + 10
                }
            } else {
                return {
                    ...shape,
                    y: shape.y - 100
                }
            }
        });
        setShapes(nextShapes);
    }

    return (
        <>
          <Card>
            <Button onClick={handleClick}>
                Move circles down!
            </Button>
            {shapes.map(shape => (
                <div 
                    key={shape.id}
                    style={{
                        background: 'purple',
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        borderRadius:
                            shape.type === 'circle'
                                ? '50%' : '',
                        width: 15,
                        height: 15
                    }} />
            ))}
          </Card>
        </>
    )
}