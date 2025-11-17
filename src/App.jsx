// src/App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CreatePostBox from "./components/CreatePostBox";
import PostList from "./components/PostList";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import StoriesBar from "./components/StoriesBar";

// 👇 สำคัญมาก: ต้องมีตัวแปรนี้อยู่ด้านบน
const initialPosts = [
  {
    id: 1,
    author: "Pimpa Naree",
    content: "กำลังลองทำหน้า News Feed ด้วย React อยู่ 😄",
    likes: 10,
    commentsCount: 2,
    timeText: "เมื่อสักครู่",
    isLiked: false
  },
  {
    id: 2,
    author: "Mark Lee",
    content: "สวัสดีชาว React ทุกคน 👋",
    likes: 5,
    commentsCount: 1,
    timeText: "1 ชม.",
    isLiked: true
  }
];

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", theme === "dark");
  }, [theme]);

  const handleToggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const handleCreatePost = (text) => {
    const newPost = {
      id: Date.now(),
      author: "You",
      content: text,
      likes: 0,
      commentsCount: 0,
      timeText: "เมื่อสักครู่",
      isLiked: false
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  const handleToggleLike = (postId) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: !post.isLiked ? post.likes + 1 : post.likes - 1
            }
          : post
      )
    );
  };

  return (
    <div className="app">
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />

      <div className="layout">
        <SidebarLeft />

        <div className="feed-column">
          <StoriesBar />
          <CreatePostBox onCreatePost={handleCreatePost} />
          <PostList posts={posts} onToggleLike={handleToggleLike} />
        </div>

        <SidebarRight />
      </div>
    </div>
  );
}

export default App;
