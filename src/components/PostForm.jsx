import '../styling/PostForm.css'
import EncircledInitials from "../components/EncircledInitials";
import { PostButton } from "../components/PostButton";
import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext.jsx";
import { InputArea } from './InputArea.jsx';


export function PostForm() {
    const { profile } = useContext(ProfileContext)
    return (
        <div className="post-form">
            <EncircledInitials profile={profile}></EncircledInitials>
            <InputArea
                placeholder={"What's on your mind?"}
            ></InputArea>
            <PostButton></PostButton>
        </div>
    )
}