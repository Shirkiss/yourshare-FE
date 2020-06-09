import React from 'react';
import Post from "../post";

const PostList = ({ posts }) => (
    <>
      {posts.map((post, key) => (
          <Post post={post}/>
      ))}
    </>
);

export default PostList;