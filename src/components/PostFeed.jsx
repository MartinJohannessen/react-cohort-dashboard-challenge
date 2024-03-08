import '../styling/Post.css'
import { PostHeader } from "./PostHeader.jsx";

import { useContext } from "react";
import { PostsContext } from "../context/PostsContext.jsx";
import { CommentsSection } from './CommentsSection.jsx';

export function PostFeed() {
    const { posts, isLoaded } = useContext(PostsContext)
    if (isLoaded)
    {
        return (
            <div className='feed'>
                {posts.map((post, index) => (
                    <div className='post' key={index}>
                        < PostHeader
                            post={post}
                        ></PostHeader >
                        <h4 className='post-title'>{post.title}</h4>
                        <p className='post-content'>{post.content}</p>
                        <hr className="post-separator" />
                        <CommentsSection
                            post={post}
                        ></CommentsSection>
                    </div>
                ))}

            </div>
        )
    }
}