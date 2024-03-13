import { useState } from 'react';
import { InputField } from './InputField.jsx';
import PropTypes from 'prop-types'
import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext.jsx";
import '../styling/InputForm.css'
import '../styling/InputContainer.css'
import '../styling/PostButton.css'
import { ProfileHeader } from './ProfileHeader.jsx';

export function ProfileForm() {

    const { profile, updateProfile } = useContext(ProfileContext)

    const [formData, setFormData] = useState({
        firstName: profile.firstName,
        lastName: profile.lastName,
        street: profile.street,
        city: profile.city,
        gender: profile.gender,
        email: profile.email,
        jobTitle: profile.jobTitle,
        favouriteColour: profile.favouriteColour,
        profileImage: profile.profileImage,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile(formData)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='profile-view'>
                <h2>Profile</h2>
                <div><ProfileHeader></ProfileHeader></div>
                <div className='profile-form'>
                    <div className='profile-input'>
                        <div className='input-container'>
                            <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                            <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                            <InputField label="Street" name="street" value={formData.street} onChange={handleChange} />
                            <InputField label="City" name="city" value={formData.city} onChange={handleChange} />
                        </div>
                        <div className='input-container'>
                            <InputField label="Gender" name="gender" value={formData.gender} onChange={handleChange} />
                            <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
                            <InputField label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
                            <InputField label="Favourite Colour" name="favouriteColour" value={formData.favouriteColour} onChange={handleChange} />
                            <InputField label="Profile Image URL" name="profileImage" value={formData.profileImage} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='button-container'>
                        <button className='profile-button' type="submit">Save</button>
                    </div>
                </div>
            </div>
        </form>
    );
}
ProfileForm.propTypes = {
    profile: PropTypes.object
}