import React from "react";

// custom components
import Header from "./components/header/Header";
import PostForm from "./components/post-form/PostForm";

// stylesheet
import "./App.css";
import PostDisplay from "./components/posts-display/PostDisplay";

function App() {

  return (
    <div className="App">
      <Header heading="React Demo App" />
      <PostForm />
      <PostDisplay />
    </div>
  );
}

export default App;
