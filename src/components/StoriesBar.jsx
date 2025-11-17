// src/components/StoriesBar.jsx
import React from "react";
import "../App.css";

// ข้อมูลสตอรี่ตัวอย่าง
const stories = [
  {
    id: 1,
    name: "คุณ",
    label: "สร้างสตอรี่",
    type: "create",   // 👈 การ์ดแรกเป็นโหมดสร้างสตอรี่
    imageUrl: ""
  },
  {
    id: 2,
    name: "Friend 1",
    type: "normal",
    imageUrl: ""
  },
  {
    id: 3,
    name: "Friend 2",
    type: "normal",
    imageUrl: ""
  },
  {
    id: 4,
    name: "Friend 3",
    type: "normal",
    imageUrl: ""
  }
];

function StoriesBar() {
  return (
    <div className="card stories-bar">
      {stories.map((s) => (
        <div
          key={s.id}
          className={`story-card ${
            s.type === "create" ? "story-card-create" : ""
          }`}
        >
          {/* พื้นหลังสตอรี่ (ตอนนี้เป็นสีเทา ใช้ class .story-bg จาก App.css) */}
          <div className="story-bg" />

          {/* วงโปรไฟล์มีขอบสีฟ้า */}
          <div className="story-avatar">
            <div className="story-avatar-ring">
              <div className="avatar avatar-sm" />
            </div>
          </div>

          {/* การ์ดแรกมีปุ่ม + */}
          {s.type === "create" && (
            <button className="story-plus-btn">+</button>
          )}

          {/* ชื่อด้านล่าง */}
          <div className="story-name">
            {s.type === "create" ? "สร้างสตอรี่" : s.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StoriesBar;
