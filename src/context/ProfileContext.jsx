import { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types'
const ProfileContext = createContext();


export function ProfileProvider({ children }) {
    const [profile, setProfile] = useState({
        id: 1,
        name: '',
        bio: '',
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