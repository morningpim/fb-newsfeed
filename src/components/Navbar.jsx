import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 

const styles = {
  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    height: 56,
    backgroundColor: "var(--navbar-bg)",
    borderBottom: "1px solid var(--border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    width: "100%",
    maxWidth: 1360,
    padding: "0 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    minWidth: 280,
  },
  logoCircle: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "var(--accent)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 800,
    fontSize: 24,
  },
  searchWrapper: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: 8,
    height: 40,
    padding: "0 12px",
    borderRadius: 999,
    backgroundColor: "var(--input-bg)",
  },
  searchInput: {
    flex: 1,
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: 14,
    color: "var(--text)",
  },
  center: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  tab: (active) => ({
    position: "relative",
    width: 120,
    height: 52,
    border: "none",
    background: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: active ? "var(--icon-active)" : "var(--icon)",
    fontSize: 22,
  }),
  underline: (active) => ({
    position: "absolute",
    bottom: 0,
    width: active ? 60 : 0,
    height: 3,
    backgroundColor: "var(--icon-active)",
    borderRadius: 2,
    transition: "width 0.15s ease",
  }),
  right: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    minWidth: 260,
    justifyContent: "flex-end",
  },
  circleBtn: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "var(--input-bg)",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: 18,
    color: "var(--text)",
  },
};

const TABS = [
  { id: "home", icon: "🏠" },
  { id: "video", icon: "▶️" },
  { id: "market", icon: "🛒" },
  { id: "groups", icon: "👥" },
  { id: "gaming", icon: "🎮" },
];

const ROUTES = {
  home: "/",
  video: "/video",
  market: "/market",
  groups: "/groups",
  gaming: "/gaming",
};

export default function Navbar({ onToggleAccountPanel }) {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  // ⭐ Sync active tab กับ URL
  useEffect(() => {
    const path = location.pathname;

    const matched = Object.entries(ROUTES).find(
      ([key, val]) => val === path
    );

    if (matched) setActive(matched[0]);
  }, [location.pathname]);

  
  const handleTabClick = (id) => {
    setActive(id);
    navigate(ROUTES[id]);
  };

  const handleAccountClick = () => {
    if (onToggleAccountPanel) onToggleAccountPanel();
  };

  return (
    <header style={styles.navbar}>
      <div style={styles.inner}>
       
        <div style={styles.left}>
          <div style={styles.logoCircle}>f</div>
          <div style={styles.searchWrapper}>
            <span style={{ fontSize: 14, color: "var(--text-muted)" }}>🔍</span>
            <input
              style={styles.searchInput}
              placeholder="ค้นหาใน Facebook"
            />
          </div>
        </div>

        
        <nav style={styles.center}>
          {TABS.map((t) => (
            <button
              key={t.id}
              style={styles.tab(active === t.id)}
              onClick={() => handleTabClick(t.id)}
            >
              {t.icon}
              <div style={styles.underline(active === t.id)} />
            </button>
          ))}
        </nav>

        
        <div style={styles.right}>
          <button style={styles.circleBtn}>▦</button>
          <button style={styles.circleBtn}>💬</button>
          <button style={styles.circleBtn}>🔔</button>
          <button style={styles.circleBtn} onClick={handleAccountClick}>
            Y
          </button>
        </div>
      </div>
    </header>
  );
}
