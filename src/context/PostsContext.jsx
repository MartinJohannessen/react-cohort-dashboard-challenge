import { createContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)


    const addPost = useCallback((newPost) => {
        setPosts((existing) => [...existing, newPost]);
    }, []);

    const updatePost = useCallback((updatedPost) => {
        setPosts((currentPosts) => currentPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
    }, []);

    const deletePost = useCallback((postId) => {
        setPosts((currentPosts) => currentPosts.filter((post) => post.id !== postId));
    }, []);

    useEffect(() => {
        fetchPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchPosts = async () => {
        try
        {
            const address = 'https://boolean-api-server.fly.dev/MartinJohannessen/post';
            const response = await fetch(address);
            const posts = await response.json();

            const postsWithCommentsPromises = posts.map(async (post) => {
                return fetchAndAddComments(post);
            });

            const postsWithComments = await Promise.all(postsWithCommentsPromises);
            await setPosts(postsWithComments);
            setIsLoaded(true)
        } catch (error)
        {
            console.error("Fetching posts and/or comments failed:", error);
        }
    };

    const fetchAndAddComments = async (post) => {
        const address = `https://boolean-api-server.fly.dev/MartinJohannessen/post/${post.id}/comment`;
        const response = await fetch(address);
        const data = await response.json();
        return { ...post, comments: data };
    };

    const contextValue = {
        posts,
        addPost,
        isLoaded,
        updatePost,
        deletePost,
    };

    return (
        <PostsContext.Provider value={contextValue}>
            {children}
        </PostsContext.Provider>
    );
};

PostsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
