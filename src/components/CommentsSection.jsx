import PropTypes from 'prop-types'
import { Comment } from './Comment'
import { CommentForm } from './CommentForm'
export function CommentsSection({ post }) {

    const comments = post.comments
    return (
        <div className='comment-section'>
            {comments.map((comment, index) => (
                <Comment
                    key={index}
                    comment={comment}
                ></Comment>
            ))}
            <CommentForm
                isPost={false}
                placeholder={"Add a comment..."}
            ></CommentForm>
        </div >
    )
}
CommentsSection.propTypes = {
    post: PropTypes.object
}