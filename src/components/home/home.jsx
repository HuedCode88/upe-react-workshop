import React from "react";
import UserProfile from "../userprofile/userprofile";
import Feed from "../feed/feed";

const home = ({ profile, setPosts, posts, showForm, setShowForm }) => {
  return (
    <div className="App">
      <div className="main">
        <UserProfile
          userImage={profile.userImage}
          name={profile.name}
          username={profile.username}
          bio={profile.bio}
          setPosts={setPosts}
          posts={posts}
          showForm={showForm}
          setShowForm={setShowForm}
        />
        <Feed posts={posts} setPosts={setPosts} showForm={showForm} setShowForm={setShowForm} profile={profile} />
      </div>
    </div>
  );
};

export default home;
