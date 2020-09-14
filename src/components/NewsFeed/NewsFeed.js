import React, { useEffect, useState } from 'react';
import Post from '../Comments/Post/Post';

const NewsFeed = () => {
  const [post, setPost] = useState([]);
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])
  return (
    <>
      {
        post.map(post => <Post
        key = {post.id}
        post = {post}
        ></Post>)
      }
    </>
  );
};

export default NewsFeed;