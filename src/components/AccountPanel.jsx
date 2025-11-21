import React from "react";

export default function AccountPanel({
  onClose,
  theme = "dark",
  onToggleTheme,
}) {
  const isDark = theme === "dark";

  const rowStyle = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: 8,
    borderRadius: 8,
    cursor: "pointer",
  };

  const iconCircle = {
    width: 32,
    height: 32,
    borderRadius: "50%",
    backgroundColor: "var(--surface)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };

  const labelStyle = {
    fontSize: 14,
    color: "var(--text)",
  };

  const subLabelStyle = {
    fontSize: 12,
    color: "var(--text-muted)",
  };

  const togglePillStyle = {
    width: 40,
    height: 20,
    borderRadius: 999,
    backgroundColor: isDark
      ? "var(--accent)"
      : "var(--surface)",
    padding: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: isDark ? "flex-end" : "flex-start",
    transition: "background-color 0.15s ease, justify-content 0.15s ease",
  };

  const toggleThumbStyle = {
    width: 16,
    height: 16,
    borderRadius: "50%",
    backgroundColor: "#fff",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 64,
        right: 8,
        width: 360,
        backgroundColor: "var(--surface)",
        borderRadius: 12,
        boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
        padding: 12,
        zIndex: 200,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      
      <section
        style={{
          backgroundColor: "var(--surface-alt)",
          borderRadius: 10,
          padding: 10,
          display: "flex",
          alignItems: "center",
          gap: 10,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "var(--surface)",
          }}
        />
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "var(--text)",
            }}
          >
            Pimpa Naree
          </div>
          <div
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              marginTop: 2,
            }}
          >
            ดูโปรไฟล์ทั้งหมด
          </div>
        </div>
      </section>

      
      <section
        style={{
          backgroundColor: "var(--surface-alt)",
          borderRadius: 10,
          padding: 8,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        
        <div
          style={rowStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--surface)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          <div style={iconCircle}>⚙️</div>
          <span style={labelStyle}>การตั้งค่าและความเป็นส่วนตัว</span>
        </div>

        
        <div
          style={rowStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--surface)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          <div style={iconCircle}>❓</div>
          <span style={labelStyle}>ความช่วยเหลือและการสนับสนุน</span>
        </div>

        
        <div
          style={rowStyle}
          onClick={() => onToggleTheme && onToggleTheme()}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--surface)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          <div style={iconCircle}>{isDark ? "🌙" : "☀️"}</div>
          <div style={{ flex: 1 }}>
            <div style={labelStyle}>การแสดงผลและการเข้าถึง</div>
            <div style={subLabelStyle}>
              โหมดมืด: {isDark ? "เปิดอยู่" : "ปิดอยู่"}
            </div>
          </div>
          <div style={togglePillStyle}>
            <div style={toggleThumbStyle} />
          </div>
        </div>

        
        <div
          style={rowStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--surface)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          <div style={iconCircle}>💬</div>
          <span style={labelStyle}>แสดงความคิดเห็น</span>
        </div>

        
        <div
          style={rowStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--surface)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          <div style={iconCircle}>⏏</div>
          <span style={labelStyle}>ออกจากระบบ</span>
        </div>
      </section>

      {onClose && (
        <button
          onClick={onClose}
          style={{
            marginTop: 4,
            alignSelf: "flex-end",
            border: "none",
            background: "transparent",
            color: "var(--text-muted)",
            fontSize: 12,
            cursor: "pointer",
          }}
        >
          ปิด
        </button>
      )}
    </div>
  );
}
