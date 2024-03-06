// context/PostsContext.jsx
import { createContext, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
const PostsContext = createContext()

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [selectedPost, setSelectedPost] = useState(null)

    const addPost = useCallback((newPost) => {
        setPosts((currentPosts) => [newPost, ...currentPosts])
    }, [])

    const updatePost = useCallback((updatedPost) => {
        setPosts((currentPosts) => currentPosts.map(post => post.id === updatedPost.id ? updatedPost : post))
    }, [])

    const deletePost = useCallback((postId) => {
        setPosts((currentPosts) => currentPosts.filter(post => post.id !== postId))
    }, [])

    const contextValue = {
        posts,
        addPost,
        updatePost,
        deletePost,
        selectedPost,
        setSelectedPost,
    }

    return (
        <PostsContext.Provider value={contextValue}>
            {children}
        </PostsContext.Provider>
    )
}

PostsProvider.propTypes = {
    children: PropTypes.node.isRequired,
}