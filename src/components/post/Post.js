import React from "react";

// stylesheet
import "./Post.css";

function Post({ id, title, body, deletePost }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <button className="btn btn-danger" onClick={() => deletePost(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Post;
