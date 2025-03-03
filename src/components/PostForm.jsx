import '../styling/InputForm.css'
import EncircledInitials from "./EncircledInitials.jsx";
import { PostButton } from "./PostButton.jsx";
import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext.jsx";
import { InputArea } from './InputArea.jsx';
import PropTypes from 'prop-types'


export function PostForm({ placeholder, isPost }) {
    const { profile } = useContext(ProfileContext)
    return (
        <div className="post-form">
            <EncircledInitials profile={profile}></EncircledInitials>
            <InputArea
                isPost={isPost}
                placeholder={placeholder}
            ></InputArea>
            {isPost ? <PostButton></PostButton> : <></>}
        </div>
    )
}
PostForm.propTypes = {
    placeholder: PropTypes.string,
    isPost: PropTypes.bool
}