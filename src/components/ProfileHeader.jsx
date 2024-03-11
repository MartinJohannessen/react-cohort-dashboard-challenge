import EncircledInitials from "./EncircledInitials";
import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";

export function ProfileHeader() {
    const { profile } = useContext(ProfileContext)
    return (
        <div className="profile-header">
            <div className="profile-banner">
                <EncircledInitials
                    className="profile-initials"
                    profile={profile}
                ></EncircledInitials>
                <h3>{profile.firstName} {profile.lastName}</h3>
            </div>
            <hr className="separator"></hr>
        </div>
    )
}