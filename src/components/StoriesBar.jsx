import React from "react";

const styles = {
  container: {
    backgroundColor: "var(--surface)",
    borderRadius: 8,
    padding: 12,
    display: "flex",
    gap: 8,
    overflowX: "auto",
  },
  storyCard: {
    width: 112,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "var(--surface-alt)",
    position: "relative",
    flexShrink: 0,
  },
  avatar: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "3px solid var(--accent)",
    backgroundColor: "var(--surface)",
  },
  label: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    fontSize: 13,
    fontWeight: 600,
    color: "var(--text)",
    textShadow: "0 1px 3px rgba(0,0,0,0.8)",
  },
};

const STORIES = [
  { id: 1, label: "สร้างสตอรี่" },
  { id: 2, label: "Friend 1" },
  { id: 3, label: "Friend 2" },
  { id: 4, label: "Friend 3" },
];

export default function StoriesBar() {
  return (
    <div style={styles.container}>
      {STORIES.map((s) => (
        <div key={s.id} style={styles.storyCard}>
          <div style={styles.avatar} />
          <span style={styles.label}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
