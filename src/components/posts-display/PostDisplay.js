import React from "react";

// stylesheet
import "./PostDisplay.css";
import Post from "../post/Post";

function PostDisplay({ posts, deletePost }) {
  return (
    <div className="post-display">
      {posts.map((post) => (
        <Post id={post.id} title={post.title} body={post.body} key={post.id} deletePost={deletePost} />
      ))}
    </div>
  );
}

export default PostDisplay;
