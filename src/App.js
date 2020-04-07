import React, { useState } from "react";

// custom components
import Header from "./components/header/Header";
import PostForm from "./components/post-form/PostForm";

// stylesheet
import "./App.css";
import PostDisplay from "./components/posts-display/PostDisplay";

function App() {
  const [posts, setPosts] = useState([]);

  const deletePost = (postId) => {
    const filteredPosts = posts.filter((post) => post.id !== postId);
    setPosts(filteredPosts);
  };

  return (
    <div className="App">
      <Header heading="React Demo App" />
      <PostForm setPosts={setPosts} />
      <PostDisplay posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default App;
