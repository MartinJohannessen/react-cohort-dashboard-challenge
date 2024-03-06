// context/ContactsContext.jsx
import { createContext, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
const ContactsContext = createContext()

export const ContactsProvider = ({ children }) => {
    const [contacts, setContacts] = useState([])
    const [selectedContact, setSelectedContact] = useState(null)

    const addContact = useCallback((newContact) => {
        setContacts((currentContacts) => [newContact, ...currentContacts])
    }, [])

    const updateContact = useCallback((updatedContact) => {
        setContacts((currentContacts) => currentContacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact))
    }, [])

    const deleteContact = useCallback((contactId) => {
        setContacts((currentContacts) => currentContacts.filter(contact => contact.id !== contactId))
    }, [])

    const contextValue = {
        contacts,
        addContact,
        updateContact,
        deleteContact,
        selectedContact,
        setSelectedContact,
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