import React, { useRef, useState, useEffect } from "react";

const styles = {
  wrapper: {
    position: "relative",
  },
  container: {
    backgroundColor: "var(--surface)",
    borderRadius: 8,
    padding: 12,
    overflow: "hidden", // ซ่อน scrollbar
  },
  list: {
    display: "flex",
    gap: 8,
    overflowX: "auto",
    scrollBehavior: "smooth",
    paddingBottom: 4,
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
  arrowBtnBase: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 32,
    height: 32,
    borderRadius: "50%",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff",
    fontSize: 18,
    zIndex: 50,
  },
  arrowLeft: {
    left: 6,
  },
  arrowRight: {
    right: 6,
  },
};

const STORIES = [
  { id: 1, label: "สร้างสตอรี่" },
  { id: 2, label: "Friend 1" },
  { id: 3, label: "Friend 2" },
  { id: 4, label: "Friend 3" },
  { id: 5, label: "Friend 4" },
  { id: 6, label: "Friend 5" },
  { id: 7, label: "Friend 6" },
];

export default function StoriesBar() {
  const listRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateButtons = () => {
    const el = listRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    updateButtons();
  }, []);

  const scrollByAmount = 240; // ประมาณ 2 story

  const handleScrollLeft = () => {
    const el = listRef.current;
    if (!el) return;
    el.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    const el = listRef.current;
    if (!el) return;
    el.scrollBy({ left: scrollByAmount, behavior: "smooth" });
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div
          style={styles.list}
          ref={listRef}
          onScroll={updateButtons}
        >
          {STORIES.map((s) => (
            <div key={s.id} style={styles.storyCard}>
              <div style={styles.avatar} />
              <span style={styles.label}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ปุ่มเลื่อนซ้าย */}
      {canScrollLeft && (
        <button
          type="button"
          onClick={handleScrollLeft}
          style={{ ...styles.arrowBtnBase, ...styles.arrowLeft }}
        >
          ‹
        </button>
      )}

      {/* ปุ่มเลื่อนขวา */}
      {canScrollRight && (
        <button
          type="button"
          onClick={handleScrollRight}
          style={{ ...styles.arrowBtnBase, ...styles.arrowRight }}
        >
          ›
        </button>
      )}
    </div>
  );
}
