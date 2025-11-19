import React from "react";

const ADS = [
  { id: 1, title: "โฆษณา 1", url: "ads1.com" },
  { id: 2, title: "โฆษณา 2", url: "ads2.com" },
];

const CONTACTS = ["Pim", "Best Friend", "React Dev"];

export default function SidebarRight() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Sponsored */}
      <section
        style={{
          backgroundColor: "var(--surface)",
          borderRadius: 8,
          padding: 10,
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 8,
            color: "var(--text)",
          }}
        >
          ได้รับการสปอนเซอร์
        </div>
        {ADS.map((ad) => (
          <div key={ad.id} style={{ marginBottom: 12 }}>
            <div
              style={{
                width: "100%",
                height: 130,
                borderRadius: 8,
                backgroundColor: "var(--surface-alt)",
              }}
            />
            <div
              style={{
                marginTop: 6,
                fontSize: 13,
                fontWeight: 600,
                color: "var(--text)",
              }}
            >
              {ad.title}
            </div>
            <div
              style={{
                fontSize: 12,
                color: "var(--text-muted)",
              }}
            >
              {ad.url}
            </div>
          </div>
        ))}
      </section>

      {/* Contacts */}
      <section
        style={{
          backgroundColor: "var(--surface)",
          borderRadius: 8,
          padding: 10,
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 8,
            color: "var(--text-muted)",
          }}
        >
          การติดต่อ
        </div>
        {CONTACTS.map((name) => (
          <div
            key={name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: 6,
              borderRadius: 8,
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
              }}
            />
            <span style={{ fontSize: 14, color: "var(--text)" }}>{name}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
