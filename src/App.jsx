import { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Create from "./pages/Create";
import Front from "./pages/Front";

import song from "./assets/song.mp3"; 

export default function App() {
  const [posts, setPosts] = useState([]);
  const audioRef = useRef(null);

  // Add new post
  const handleAdd = (newPost) => {
    setPosts([newPost, ...posts]);
    toast.success("Post added successfully!");
  };

  // Delete post
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
    toast.error("Post deleted!");
  };

  return (
    <Router>
      {/* ✅ Hidden global audio */}
      <audio ref={audioRef} src={song} preload="auto" loop />

      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Front audioRef={audioRef} />} />
          <Route path="/home" element={<><Navbar /><Home /></>} />
          <Route path="/photos" element={<><Navbar /><Photos posts={posts} handleDelete={handleDelete} /></>} />
          <Route path="/create" element={<><Navbar /><Create onAdd={handleAdd} /></>} />
        </Routes>

        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </Router>
  );
}
