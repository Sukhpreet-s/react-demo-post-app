import React, { useState } from "react";

// stylesheet
import "./PostForm.css";

function PostForm({ setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="post-form">
      <input
        type="text"
        placeholder="Enter title of the post"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        rows="5"
        placeholder="Enter body of the post"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button
        onClick={() => setPosts((prevPosts) => [...prevPosts, { id: prevPosts.length+1,title, body }])}
      >
        Create Post
      </button>
    </div>
  );
}

export default PostForm;
