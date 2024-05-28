import { useState } from "react";
import { Nav, Button } from "react-bootstrap";

let initialCounters = [
    0, 0, 0
];

export default function CounterList() {
    const [counters, setCounters] = useState(
        initialCounters
    );

    function handleIncrementClick(index) {
        const nextCounters = counters.map((c, i) => {
            if (i === index) {
                return c + 1;
            } else {
                return c;
            }
        });
        setCounters(nextCounters);
    }

    return (
        <Nav className='flex-column'>
            {counters.map((counter, i) => (
                <Nav.Item key={i}>
                    <Button onClick={() => {
                        handleIncrementClick(i);
                    }} style={{margin: "0.5rem"}}
                    >+1</Button>
                    {counter}
                </Nav.Item>
            ))}
        </Nav>
    );
}