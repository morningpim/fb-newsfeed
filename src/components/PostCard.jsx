import React from "react";

export default function PostCard({ post, onLike }) {
  return (
    <article
      style={{
        backgroundColor: "var(--surface)",
        borderRadius: 8,
        padding: 12,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "var(--surface-alt)",
          }}
        />
        <div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "var(--text)",
            }}
          >
            {post.author}
          </div>
          <div
            style={{
              fontSize: 12,
              color: "var(--text-muted)",
            }}
          >
            {post.time}
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          fontSize: 15,
          color: "var(--text)",
        }}
      >
        {post.content}
      </div>

      {/* Stats */}
      <div
        style={{
          marginTop: 4,
          paddingTop: 4,
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 13,
          color: "var(--text-muted)",
        }}
      >
        <span>👍 {post.likes}</span>
        <span>{post.comments} ความคิดเห็น</span>
      </div>

      {/* Actions */}
      <div
        style={{
          paddingTop: 4,
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-around",
          fontSize: 14,
        }}
      >
        <div
          style={{
            padding: "6px 0",
            cursor: "pointer",
            flex: 1,
            textAlign: "center",
          }}
          onClick={onLike}
        >
          👍 ถูกใจ
        </div>
        <div
          style={{
            padding: "6px 0",
            cursor: "pointer",
            flex: 1,
            textAlign: "center",
          }}
        >
          💬 แสดงความคิดเห็น
        </div>
        <div
          style={{
            padding: "6px 0",
            cursor: "pointer",
            flex: 1,
            textAlign: "center",
          }}
        >
          ↗ แชร์
        </div>
      </div>
    </article>
  );
}
