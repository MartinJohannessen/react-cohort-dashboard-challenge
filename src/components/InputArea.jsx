import '../styling/InputContainer.css'; // Make sure to create an InputField.css file in the same directory
import PropTypes from 'prop-types';
import { useState } from 'react';
export function InputArea({ name, value, onChange, placeholder }) {

    const [text, setText] = useState('')
    const rows = text.split("\n").length

    return (
        <div className="input-container">
            <textarea
                className="input-area"
                name={name}
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder={placeholder}
                rows={rows}
            />
        </div>
    )
}

InputArea.propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};