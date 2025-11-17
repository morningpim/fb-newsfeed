// src/components/SidebarRight.jsx
import React from "react";
import "../App.css";

function SidebarRight() {
  return (
    <aside className="sidebar sidebar-right">
      <div className="sidebar-section">
        <h4 className="sidebar-title">ได้รับการสปอนเซอร์</h4>
        <div className="sidebar-ad-card">
          <div className="sidebar-ad-image" />
          <div className="sidebar-ad-text">
            ตัวอย่างโฆษณา
          </div>
        </div>
      </div>

      <div className="sidebar-section">
        <h4 className="sidebar-title">วันเกิด</h4>
        <div className="sidebar-item">
          🎉 วันนี้เป็นวันเกิดของเพื่อนตัวอย่าง
        </div>
      </div>
    </aside>
  );
}

export default SidebarRight;
