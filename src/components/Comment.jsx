import '../styling/Comment.css'
import PropTypes from 'prop-types';
import EncircledInitials from './EncircledInitials';
import { useContext } from "react";
import { ContactsContext } from "../context/ContactsContext.jsx";

export function Comment({ comment }) {
    const { getContactById } = useContext(ContactsContext)
    const profile = getContactById(comment.contactId)
    return (
        <div className="comment">
            <EncircledInitials profile={profile}></EncircledInitials>
            <div className='comment-body'>
                <div className='comment-name'>{profile.firstName} {profile.lastName}</div>
                <div className='comment-content'>{comment.content}</div>
            </div>
        </div>
    )
}
Comment.propTypes = {
    comment: PropTypes.object
}
