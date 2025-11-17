// src/components/PostCard.jsx
import React from "react";
import "../App.css";

function PostCard({ post, onToggleLike }) {
  return (
    <div className="card post-card">
      <div className="post-header">
        <div className="avatar" />
        <div>
          <div className="author-name">{post.author}</div>
          <div className="post-time">{post.timeText}</div>
        </div>
      </div>

      <div className="post-content">
        {post.content}
      </div>

      <div className="post-stats">
        <span>👍 {post.likes}</span>
        <span>{post.commentsCount} ความคิดเห็น</span>
      </div>

      <div className="post-actions">
        <button
          className={`action-btn ${post.isLiked ? "active" : ""}`}
          onClick={() => onToggleLike(post.id)}
        >
          👍 ถูกใจ
        </button>
        <button className="action-btn">💬 แสดงความคิดเห็น</button>
        <button className="action-btn">↪ แชร์</button>
      </div>
    </div>
  );
}

export default PostCard;
