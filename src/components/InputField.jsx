import '../styling/InputContainer.css'; // Make sure to create an InputField.css file in the same directory
import PropTypes from 'prop-types';

export function InputField({ type, label, name, value, onChange, placeholder }) {
    return (
        <div className="input-container">
            <label htmlFor={name}>{label}</label>
            <input
                className="input-field"
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}

InputField.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'datetime-local', 'month', 'week', 'time', 'range', 'color']),
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};