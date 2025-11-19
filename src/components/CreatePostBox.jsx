import React, { useState } from "react";

export default function CreatePostBox({ onCreate }) {
  const [text, setText] = useState("");

  const handlePost = () => {
    if (!text.trim()) return;
    onCreate(text.trim());
    setText("");
  };

  return (
    <div
      style={{
        backgroundColor: "var(--surface)",
        borderRadius: 8,
        padding: 12,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "var(--surface-alt)",
          }}
        />
        <input
          style={{
            flex: 1,
            height: 40,
            borderRadius: 999,
            border: "none",
            outline: "none",
            padding: "8px 14px",
            backgroundColor: "var(--input-bg)",
            color: "var(--text)",
            fontSize: 14,
          }}
          placeholder="คุณกำลังคิดอะไรอยู่?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          style={{
            padding: "6px 18px",
            borderRadius: 999,
            border: "none",
            backgroundColor: "var(--accent)",
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
          }}
          onClick={handlePost}
        >
          โพสต์
        </button>
      </div>
    </div>
  );
}
