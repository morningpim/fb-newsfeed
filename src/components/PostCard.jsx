import React, { useState } from "react";

export default function PostCard({ post, onToggleLike, onAddComment }) {
  const [commentText, setCommentText] = useState("");
  const [isLikeBouncing, setIsLikeBouncing] = useState(false);

  const comments = post.comments || [];
  const commentCount = comments.length;

  const lastComments =
    commentCount <= 2 ? comments : comments.slice(commentCount - 2);

  const handleLikeClick = () => {
    if (!onToggleLike) return;
    onToggleLike();

    // trigger animation
    setIsLikeBouncing(true);
    setTimeout(() => setIsLikeBouncing(false), 150);
  };

  const handleCommentSubmit = () => {
    if (!commentText.trim()) return;
    if (onAddComment) onAddComment(commentText);
    setCommentText("");
  };

  const handleCommentKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleCommentSubmit();
    }
  };

  const likeStyle = {
    padding: "6px 0",
    cursor: "pointer",
    flex: 1,
    textAlign: "center",
    color: post.isLiked ? "var(--icon-active)" : "var(--text-muted)",
    fontWeight: post.isLiked ? 600 : 400,
    transform: isLikeBouncing ? "scale(1.15)" : "scale(1)",
    transition: "transform 0.15s ease, color 0.15s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  };

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
        <span>{commentCount} ความคิดเห็น</span>
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
        <div style={likeStyle} onClick={handleLikeClick}>
          <span>👍</span>
          <span>ถูกใจ</span>
        </div>

        <div
          style={{
            padding: "6px 0",
            cursor: "pointer",
            flex: 1,
            textAlign: "center",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <span>💬</span>
          <span>แสดงความคิดเห็น</span>
        </div>

        <div
          style={{
            padding: "6px 0",
            cursor: "pointer",
            flex: 1,
            textAlign: "center",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <span>↗</span>
          <span>แชร์</span>
        </div>
      </div>

      {/* Comment list (ล่าสุด 1–2 อัน) */}
      {commentCount > 0 && (
        <div
          style={{
            marginTop: 4,
            paddingTop: 4,
            borderTop: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {commentCount > 2 && (
            <div
              style={{
                fontSize: 13,
                color: "var(--text-muted)",
                cursor: "pointer",
              }}
            >
              ดูความคิดเห็นทั้งหมด {commentCount} รายการ
            </div>
          )}

          {lastComments.map((c) => (
            <div
              key={c.id}
              style={{
                display: "flex",
                gap: 6,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  backgroundColor: "var(--surface-alt)",
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  backgroundColor: "var(--surface-alt)",
                  borderRadius: 16,
                  padding: "6px 10px",
                  fontSize: 13,
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    fontWeight: 600,
                    marginBottom: 2,
                    color: "var(--text)",
                  }}
                >
                  {c.author}
                </div>
                <div style={{ color: "var(--text)" }}>{c.text}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Comment input */}
      <div
        style={{
          marginTop: 6,
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            backgroundColor: "var(--surface-alt)",
            flexShrink: 0,
          }}
        />
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: 8,
            backgroundColor: "var(--input-bg)",
            borderRadius: 999,
            padding: "4px 10px",
          }}
        >
          <input
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: 13,
              color: "var(--text)",
            }}
            placeholder="เขียนความคิดเห็นของคุณ..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            onKeyDown={handleCommentKeyDown}
          />
          <button
            onClick={handleCommentSubmit}
            style={{
              border: "none",
              background: "transparent",
              color: "var(--icon-active)",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            ส่ง
          </button>
        </div>
      </div>
    </article>
  );
}
