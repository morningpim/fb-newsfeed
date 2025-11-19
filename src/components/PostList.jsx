import React from "react";
import PostCard from "./PostCard";

export default function PostList({ posts, onLike }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {posts.map((p) => (
        <PostCard key={p.id} post={p} onLike={() => onLike(p.id)} />
      ))}
    </div>
  );
}
