import React from "react";

const menu = [
  ["🌀", "Meta AI"],
  ["👥", "เพื่อน"],
  ["🕒", "ความทรงจำ"],
  ["🔖", "ที่บันทึกไว้"],
  ["👨‍👩‍👧‍👦", "กลุ่ม"],
  ["▶️", "วิดีโอ"],
  ["🛒", "Marketplace"],
];

export default function SidebarLeft() {
  return (
    <div
      style={{
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 4,
        paddingRight: 4,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* Profile Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "8px 8px",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: "var(--surface-alt)",
          }}
        />
        <span style={{ fontSize: 15, fontWeight: 600 }}>Pimpa Naree</span>
      </div>

      {menu.map(([icon, label]) => (
        <div
          key={label}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "8px 8px",
            borderRadius: 8,
            fontSize: 15,
            color: "var(--text)",
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--surface-alt)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              backgroundColor: "var(--surface-alt)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </div>
          <span>{label}</span>
        </div>
      ))}

      <div
        style={{
          margin: "6px 8px",
          borderTop: "1px solid var(--border)",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "8px 8px",
          borderRadius: 8,
          fontSize: 15,
          cursor: "pointer",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--surface-alt)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "transparent")
        }
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            backgroundColor: "var(--surface-alt)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ▾
        </div>
        <span>ดูเพิ่มเติม</span>
      </div>
    </div>
  );
}
