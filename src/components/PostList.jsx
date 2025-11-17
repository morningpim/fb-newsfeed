// src/components/PostList.jsx
import React from "react";
import PostCard from "./PostCard";
import "../App.css";

function PostList({ posts, onToggleLike }) {
  return (
    <>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onToggleLike={onToggleLike}
        />
      ))}
    </>
  );
}

export default PostList;
