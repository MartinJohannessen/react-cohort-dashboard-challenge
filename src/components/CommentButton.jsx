import '../styling/CommentButton.css';
export function CommentButton() {
    return (
        <button className="comment-button">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle className='comment-button-circle' cx="12" cy="12" r="11.5" fill="#e6ebf5" stroke="#64648C" />
                <polygon points="10,8 16,12 10,16" fill="#64648C" />
            </svg>
        </button>

    )
}