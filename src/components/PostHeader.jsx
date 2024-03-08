import '../styling/PostHeader.css'
import PropTypes from 'prop-types';
import EncircledInitials from './EncircledInitials';

import { useContext } from "react";
import { ContactsContext } from "../context/ContactsContext.jsx";

export function PostHeader({ post }) {
    const { getContactById } = useContext(ContactsContext)
    const profile = getContactById(post.contactId)
    return (
        <div className="post-header">
            <EncircledInitials profile={profile}></EncircledInitials>
            <div className='post-header-info'>
                <div className='name'>{profile.firstName} {profile.lastName}</div>
                <div className='bio'>{profile.jobTitle} {profile.gender}</div>
            </div>
        </div>
    )
}
PostHeader.propTypes = {
    post: PropTypes.object
}
