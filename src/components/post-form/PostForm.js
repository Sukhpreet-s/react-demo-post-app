import React, { useState } from "react";
import { connect } from "react-redux";

import { addPost } from "store/store";

// stylesheet
import "./PostForm.css";

function PostForm({ addPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleClick = () => {
    addPost({title, body})
    setTitle("");
    setBody("");
  }

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
        onClick={handleClick}
      >
        Create Post
      </button>
    </div>
  );
}

export default connect(
  null,
  {addPost}
)(PostForm);
