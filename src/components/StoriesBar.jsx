import React, { useRef, useState, useEffect } from "react";

const styles = {
  wrapper: {
    position: "relative",
  },
  container: {
    backgroundColor: "var(--surface)",
    borderRadius: 8,
    padding: 12,
    overflow: "hidden",
  },
  list: {
    display: "flex",
    gap: 8,
    overflowX: "auto",
    scrollBehavior: "smooth",
    paddingBottom: 4,
  },
  storyCardBase: {
    width: 112,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "var(--surface-alt)",
    position: "relative",
    flexShrink: 0,
  },
  imageOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1))",
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
    zIndex: 2,
  },
  label: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    fontSize: 13,
    fontWeight: 600,
    color: "#fff",
    textShadow: "0 1px 3px rgba(0,0,0,0.8)",
    zIndex: 2,
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
    backgroundColor: "rgba(0,0,0,0.6)",
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

// ✅ ใส่ path รูปสำหรับแต่ละ story (อยู่ใน public/images/)
const STORIES = [
  { id: 1, label: "สร้างสตอรี่", image: "/images/story1.jpg" },
  { id: 2, label: "Friend 1", image: "/images/story2.jpg" },
  { id: 3, label: "Friend 2", image: "/images/story3.jpg" },
  { id: 4, label: "Friend 3", image: "/images/story4.jpg" },
  { id: 5, label: "Friend 4", image: "/images/story5.jpg" },
  { id: 6, label: "Friend 5", image: "/images/story6.jpg" },
  { id: 7, label: "Friend 6", image: "/images/story7.jpg" },
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

  const scrollByAmount = 240; // เลื่อนทีละประมาณ 2 การ์ด

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
          {STORIES.map((s) => {
            const cardStyle = {
              ...styles.storyCardBase,
              ...(s.image
                ? {
                    backgroundImage: `url(${s.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                  }
                : {}),
            };

            return (
              <div key={s.id} style={cardStyle}>
                {/* overlay มืดด้านล่างให้ตัวหนังสืออ่านง่าย */}
                <div style={styles.imageOverlay} />

                <div style={styles.avatar} />
                <span style={styles.label}>{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {canScrollLeft && (
        <button
          type="button"
          onClick={handleScrollLeft}
          style={{ ...styles.arrowBtnBase, ...styles.arrowLeft }}
        >
          ‹
        </button>
      )}

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
