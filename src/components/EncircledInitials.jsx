import '../styling/EncircledInitials.css';
import PropTypes from 'prop-types';

export default function EncircledInitials({ profile }) {


    const getInitials = (name) => {
        const namesArray = name.split(' ');
        const initials = namesArray.map((n) => n[0]).join('');
        return initials.toUpperCase();
    };

    return (
        <div className="encircled-initials" style={{ backgroundColor: profile.favouriteColour }}>
            {getInitials(profile.name)}
        </div>
    );
}

EncircledInitials.propTypes = {
    profile: PropTypes.object
}
