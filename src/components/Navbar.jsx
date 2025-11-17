// src/components/Navbar.jsx
import React from "react";
import "../App.css";

function Navbar({ theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <header className="navbar">
      {/* ซ้าย: โลโก้ + ช่องค้นหา */}
      <div className="nav-left">
        <div className="logo-circle">f</div>

        <div className="nav-search">
          <span className="nav-search-icon">🔍</span>
          <input
            className="nav-search-input"
            placeholder="ค้นหาบน Facebook"
          />
        </div>
      </div>

      {/* กลาง: เมนูหลัก */}
      <div className="nav-center">
        <button className="nav-tab nav-tab-active">🏠</button>
        <button className="nav-tab">👥</button>
        <button className="nav-tab">📺</button>
        <button className="nav-tab">🏪</button>
        <button className="nav-tab">🎮</button>
      </div>

      {/* ขวา: ปุ่มกลม + โปรไฟล์ + toggle theme */}
      <div className="nav-right">
        <button className="nav-circle-btn">▦</button>
        <button className="nav-circle-btn">💬</button>

        <button className="nav-circle-btn nav-bell-btn">
          🔔
          <span className="nav-badge">20+</span>
        </button>

        <div className="nav-profile avatar-sm">P</div>

        <button
          className="nav-circle-btn theme-toggle-icon"
          onClick={onToggleTheme}
          title={isDark ? "สลับเป็นโหมดสว่าง" : "สลับเป็นโหมดมืด"}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
