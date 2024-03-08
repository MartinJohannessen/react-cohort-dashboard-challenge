import '../styling/EncircledInitials.css';
import PropTypes from 'prop-types';

export default function EncircledInitials({ profile }) {


    const getInitials = (profile) => {
        const initials = profile.firstName[0] + profile.lastName[0];
        return initials.toUpperCase();
    };

    return (
        <div className="encircled-initials" style={{ backgroundColor: profile.favouriteColour }}>
            {getInitials(profile)}
        </div>
    );
}

EncircledInitials.propTypes = {
    profile: PropTypes.object
}
