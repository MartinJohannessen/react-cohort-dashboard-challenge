import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { PostsContext } from '../context/PostsContext'
import { PostHeader } from '../components/PostHeader'
import { CommentsSection } from '../components/CommentsSection'

export function PostRoute() {
    const { postId } = useParams()
    const { posts, getPostById, isLoaded } = useContext(PostsContext)
    console.log("postId: " + postId)
    console.log(posts)
    if (isLoaded)
    {
        const post = getPostById(postId)
        console.log(post)
        return (
            <>
                <PostHeader
                    post={post}
                ></PostHeader>
                <Link to={`/post/${post.id}`} className='post-title-link'>
                    <h4 >{post.title}</h4>
                </Link>
                <p className='post-content'>{post.content}</p>
                <hr className="post-separator" />
                <CommentsSection
                    post={post}
                    isPostRoute={true}
                ></CommentsSection>
            </>
        )
    }
    return null
}