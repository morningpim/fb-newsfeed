import React, { useEffect, useState } from "react";
import AccountPanel from "./components/AccountPanel";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import StoriesBar from "./components/StoriesBar";
import CreatePostBox from "./components/CreatePostBox";
import PostList from "./components/PostList";
import Layout3Col from "./layout/Layout3Col";
import VideoPage from "./components/VideoPage";


const initialPosts = [
  {
    id: 1,
    author: "Pimpa Naree",
    time: "เมื่อสักครู่",
    content: "กำลังลองทำหน้า News Feed ด้วย React อยู่ 😄",
    likes: 10,
    isLiked: false,
    comments: [
      {
        id: 11,
        author: "Mark Lee",
        text: "สุดยอดเลย รอชมเวอร์ชันเสร็จ! 💪",
        time: "เมื่อสักครู่",
      },
    ],
  },
  {
    id: 2,
    author: "Mark Lee",
    time: "1 ชม.",
    content: "สวัสดีชาว React ทุกคน 👋",
    likes: 5,
    isLiked: true,
    comments: [
      {
        id: 21,
        author: "Pimpa Naree",
        text: "Hello React dev 😄",
        time: "55 นาที",
      },
      {
        id: 22,
        author: "You",
        text: "Nice to meet you!",
        time: "50 นาที",
      },
    ],
  },
];

function App() {
  
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const saved = window.localStorage.getItem("fb_theme");
    return saved === "light" || saved === "dark" ? saved : "dark";
  });

  
  const [posts, setPosts] = useState(() => {
    if (typeof window === "undefined") return initialPosts;
    try {
      const saved = window.localStorage.getItem("fb_posts");
      if (!saved) return initialPosts;
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : initialPosts;
    } catch (e) {
      console.error("Error parsing fb_posts from localStorage", e);
      return initialPosts;
    }
  });

  const [showAccountPanel, setShowAccountPanel] = useState(false);

  
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    window.localStorage.setItem("fb_theme", theme);
  }, [theme]);

  
  useEffect(() => {
    try {
      window.localStorage.setItem("fb_posts", JSON.stringify(posts));
    } catch (e) {
      console.error("Error saving fb_posts to localStorage", e);
    }
  }, [posts]);

  const handleCreatePost = (text) => {
    const newPost = {
      id: Date.now(),
      author: "คุณ",
      time: "เมื่อสักครู่",
      content: text,
      likes: 0,
      isLiked: false,
      comments: [],
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  const handleToggleLike = (postId) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id !== postId) return p;
        const nowLiked = !p.isLiked;
        return {
          ...p,
          isLiked: nowLiked,
          likes: p.likes + (nowLiked ? 1 : -1),
        };
      })
    );
  };

  const handleAddComment = (postId, text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newComment = {
      id: Date.now(),
      author: "คุณ",
      text: trimmed,
      time: "เมื่อสักครู่",
    };

    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? { ...p, comments: [...p.comments, newComment] }
          : p
      )
    );
  };

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Navbar onToggleAccountPanel={() => setShowAccountPanel(prev => !prev)} />

      {showAccountPanel && (
        <AccountPanel
          theme={theme}
          onClose={() => setShowAccountPanel(false)}
          onToggleTheme={handleThemeToggle}
        />
      )}

      <Routes>
        
        <Route
          path="/"
          element={
            <Layout3Col
              left={<SidebarLeft />}
              center={
                <>
                  <StoriesBar />
                  <CreatePostBox onCreate={handleCreatePost} />
                  <PostList
                    posts={posts}
                    onToggleLike={handleToggleLike}
                    onAddComment={handleAddComment}
                  />
                </>
              }
              right={<SidebarRight />}
            />
          }
        />

        
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </>
  );
}

export default App;
