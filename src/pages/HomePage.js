import React from 'react';
import PostList from "../components/post-list/post-list";
import posts from "./posts-content";


const HomePage = () => (
    <>
        <PostList posts={posts}/>
    </>
);

export default HomePage;