// context/ContactsContext.jsx
import { createContext, useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
export const ContactsContext = createContext()

export const ContactsProvider = ({ children }) => {
    const [contacts, setContacts] = useState([])

    const getContactById = useCallback((id) => {
        return contacts.find(contact => contact.id === id);
    }, [contacts]);

    const addContact = useCallback((newContact) => {
        setContacts((currentContacts) => [newContact, ...currentContacts])
    }, [])

    const updateContact = useCallback((updatedContact) => {
        setContacts((currentContacts) => currentContacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact))
    }, [])

    const deleteContact = useCallback((contactId) => {
        setContacts((currentContacts) => currentContacts.filter(contact => contact.id !== contactId))
    }, [])

    useEffect(() => {

        const address = 'https://boolean-api-server.fly.dev/MartinJohannessen/contact'
        const fetchData = () => {
            fetch(address)
                .then(res => res.json())
                .then(contacts => setContacts(contacts)
                )
                .catch(error => console.error("Fetching contacts failed:", error));
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const contextValue = {
        contacts,
        addContact,
        updateContact,
        deleteContact,
        getContactById
    }

    return (
        <ContactsContext.Provider value={contextValue}>
            {children}
        </ContactsContext.Provider>
    )
}

ContactsProvider.propTypes = {
    children: PropTypes.node.isRequired,
}