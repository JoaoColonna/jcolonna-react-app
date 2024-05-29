import { Button, Form, Nav } from "react-bootstrap";

export default function ContactList({
    selectedContact,
    contacts,
    onSelect
}) {
    return (
        <section className="contact-list">
            <Nav className="flex-column">
                {contacts.map(contact =>
                    <Nav.Item key={contact.email}>
                        <Button onClick={() => {
                            onSelect(contact);}}
                            style={{margin: "0.5rem"}}
                        >
                            {contact.name}
                        </Button>
                    </Nav.Item>
                )}
            </Nav>
        </section>
    );
}