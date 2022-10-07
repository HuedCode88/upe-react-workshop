import React from "react";
import Post from "../post/post";
import Modal from "../modal/modal";
import "./feed.css";

const feed = ({ posts, showForm, setPosts, setShowForm, profile }) => {
  return (
    <div className="feed">
      {showForm ? (
        <Modal posts={posts} setPosts={setPosts} setShowForm={setShowForm} />
      ) : (
        posts.map((post, idx) => (
          <Post
            image={post.image}
            name={post.name}
            description={post.description}
            profile={profile}
            id={idx}
            key={idx}
          />
        ))
      )}
    </div>
  );
};

export default feed;
