import { useState } from 'react'
import PropTypes from 'prop-types'
import { Comment } from './Comment'
import { CommentForm } from './CommentForm'

export function CommentsSection({ post, isPostRoute }) {
    const [showAllComments, setShowAllComments] = useState(isPostRoute ?? false)
    const comments = post.comments

    const displayedComments = showAllComments ? comments : comments.slice(-3)

    return (
        <div className='comment-section'>
            {comments.length > 3 && (
                <div className='show-previous-link'>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            setShowAllComments(!showAllComments)
                        }}
                    >
                        {showAllComments ? "Collapse previous comments" : "See previous comments"}
                    </a>
                </div>
            )}
            {displayedComments.map((comment, index) => (
                <Comment key={index} comment={comment}></Comment>
            ))}
            <CommentForm isPost={false} placeholder={"Add a comment..."}></CommentForm>
        </div>
    )
}

CommentsSection.propTypes = {
    post: PropTypes.object,
    isPostRoute: PropTypes.bool
}