import React from "react";
import { connect } from "react-redux"
 
// stylesheet
import "./PostDisplay.css";
import Post from "../post/Post";

function PostDisplay({ posts }) {

  return (
    <div className="post-display">
      {posts.map((post) => (
        <Post id={post.id} title={post.title} body={post.body} key={post.id} />
      ))}
    </div>
  );
}

export default connect(
  state => ({posts: state.posts}) // mapStateToProps
)(PostDisplay);
