import { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types'
export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
    const [profile, setProfile] = useState({
        id: 1,
        name: 'Aartin Wohannessen',
        bio: 'Dette er min bio',
        favouriteColour: '#0d7f26'
    })

    const updateProfile = useCallback((updates) => {
        setProfile((prevProfile) => ({ ...prevProfile, ...updates }))
    }, [])

    return (
        <ProfileContext.Provider value={{ profile, updateProfile }}>
            {children}
        </ProfileContext.Provider>
    );
}

ProfileProvider.propTypes = {
    children: PropTypes.node.isRequired,
}