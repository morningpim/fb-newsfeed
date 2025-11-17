// src/components/CreatePostBox.jsx
import React, { useState } from "react";
import "../App.css";

function CreatePostBox({ onCreatePost }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();            // กันไม่ให้รีเฟรชหน้า
    const trimmed = text.trim();
    if (!trimmed) return;         // ถ้าว่างไม่โพสต์
    onCreatePost(trimmed);        // ส่งข้อความไปให้ App
    setText("");                  // เคลียร์กล่องข้อความ
  };

  return (
    <div className="card">
      <div className="create-post-header">
        <div className="avatar avatar-sm">Y</div>
        <span className="placeholder">คุณกำลังคิดอะไรอยู่?</span>
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          className="create-post-textarea"
          placeholder="เขียนอะไรบางอย่าง..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="create-post-footer">
          <button
            className="btn-primary"
            type="submit"   // กด Enter ก็โพสต์ได้
          >
            โพสต์
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePostBox;
