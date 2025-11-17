// src/components/SidebarLeft.jsx
import React from "react";
import "../App.css";

function SidebarLeft() {
  return (
    <aside className="sidebar sidebar-left">
      <div className="sidebar-item sidebar-profile">
        <div className="avatar avatar-sm" />
        <span>Pimpa Naree</span>
      </div>

      <div className="sidebar-item">
        <span className="sidebar-icon">🌀</span>
        <span>Meta AI</span>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">👥</span>
        <span>เพื่อน</span>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">🕒</span>
        <span>ความทรงจำ</span>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-icon">🔖</span>
        <span>ที่บันทึกไว้</span>
      </div>

      <div className="sidebar-item sidebar-see-more">
        <span>ดูเพิ่มเติม ▾</span>
      </div>
    </aside>
  );
}

export default SidebarLeft;
