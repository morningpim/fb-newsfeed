import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import StoriesBar from "./components/StoriesBar";
import CreatePostBox from "./components/CreatePostBox";
import PostList from "./components/PostList";
import Layout3Col from "./layout/Layout3Col";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Pimpa Naree",
      time: "เมื่อสักครู่",
      content: "กำลังลองทำหน้า News Feed ด้วย React อยู่ 😄",
      likes: 10,
      comments: 2,
    },
    {
      id: 2,
      author: "Mark Lee",
      time: "1 ชม.",
      content: "สวัสดีชาว React ทุกคน 👋",
      likes: 5,
      comments: 1,
    },
  ]);

  useEffect(() => {
    document.body.classList.add("dark-mode");
    return () => document.body.classList.remove("dark-mode");
  }, []);

  const handleCreatePost = (text) => {
    const newPost = {
      id: Date.now(),
      author: "คุณ",
      time: "เมื่อสักครู่",
      content: text,
      likes: 0,
      comments: 0,
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  const handleLike = (postId) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId ? { ...p, likes: p.likes + 1 } : p
      )
    );
  };

  return (
    <>
      <Navbar />
      <Layout3Col
        left={<SidebarLeft />}
        center={
          <>
            <StoriesBar />
            <CreatePostBox onCreate={handleCreatePost} />
            <PostList posts={posts} onLike={handleLike} />
          </>
        }
        right={<SidebarRight />}
      />
    </>
  );
}

export default App;
