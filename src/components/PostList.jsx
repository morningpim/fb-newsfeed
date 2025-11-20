import React from "react";
import PostCard from "./PostCard";

export default function PostList({ posts, onToggleLike, onAddComment }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onToggleLike={() => onToggleLike(post.id)}
          onAddComment={(text) => onAddComment(post.id, text)}
        />
      ))}
    </div>
  );
}
