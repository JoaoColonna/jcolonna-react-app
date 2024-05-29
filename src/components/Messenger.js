import { useState } from 'react';
import Chat from './Chat';
import ContactList from './ContactList';

export default function Messenger() {
    const [to, setTo] = useState(contacts[0]);
    return (
        <> 
            <h3>Messenger Component</h3>
            <div>
                <ContactList 
                    contacts={contacts}
                    selectedContact={to}
                    onSelect={contact => setTo(contact)}
                />
                <Chat key={to.email} contact={to} />
            </div>
        </>
    );
}

const contacts = [
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
];