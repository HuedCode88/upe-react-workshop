import { useState } from "react";
import "./App.css";
import Home from "./components/home/home";
import CommentSection from "./components/commentSection/commentSection";
import { Routes, Route } from "react-router-dom";

const profile = {
  userImage: "https://avatars.githubusercontent.com/u/75550025?v=4",
  name: "Carlos Chavez",
  username: "Carlos",
  bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum ratione incidunt nam obcaecati, animi adipisci totam explicabo odio quae nemo quod cupiditate sed ipsa nihil facere, non dolores quidem veritatis numquam voluptates.",
};

const comments = {
  0: [
    {
      name: "user1",
      comment: "great picture",
      picture:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "user2",
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum ratione incidunt nam obcaecati, animi adipisci totam explicabo odio quae nemo quod cupiditate sed ipsa nihil facere, non dolores quidem veritatis numquam voluptates.",
      picture:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "user3",
      comment: "awesome picture",
      picture:
        "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ],
  1: [
    {
      name: "userA",
      comment: "cool!",
      picture:
        "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "userB",
      comment: "Looks awesome",
      picture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "userC",
      comment:
        "Lorem, ipsum animi adipisci totam explicabo odio quae nemo quod cupiditate sed ipsa nihil facere, non dolores quidem.",
      picture:
        "https://images.unsplash.com/photo-1572965733194-784e4b4efa45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
  ],
  2: [
    {
      name: "user4",
      comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum ratione incidunt nam obcaecati",
      picture:
        "https://images.unsplash.com/photo-1590955256716-d7676e3efbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "user5",
      comment: "cool picture",
      picture:
        "https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "user6",
      comment: "nice",
      picture:
        "https://images.unsplash.com/photo-1616356257367-9cd4bf56a45e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
  ],
};

function App() {
  const [posts, setPosts] = useState([
    {
      image:
        "https://i.pinimg.com/474x/1a/d8/9d/1ad89df08dc24462546aa7be6ffbe54e--maternity-photography-engagement-photography.jpg",
      name: "Carlos Chavez",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum ratione incidunt nam obcaecati, animi adipisci totam explicabo odio quae nemo quod cupiditate sed ipsa nihil facere, non dolores quidem veritatis numquam voluptates.",
    },
    {
      image: "https://www.scenicsuitcase.com/wp-content/uploads/2018/05/Vernazza-1-of-1-1024x819.jpg",
      name: "Carlos Chavez",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum ratione incidunt nam obcaecati, animi adipisci totam explicabo odio quae nemo quod cupiditate sed ipsa nihil facere, non dolores quidem veritatis numquam voluptates.",
    },
    {
      image: "https://www.mensjournal.com/wp-content/uploads/2021/10/bondmain.jpg?w=1600&quality=86&strip=all",
      name: "Carlos Chavez",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum ratione incidunt nam obcaecati, animi adipisci totam explicabo odio quae nemo quod cupiditate sed ipsa nihil facere, non dolores quidem veritatis numquam voluptates.",
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home profile={profile} setPosts={setPosts} posts={posts} showForm={showForm} setShowForm={setShowForm} />
        }
      />
      <Route path="/comments/:id" element={<CommentSection comments={comments} />} />
    </Routes>
  );
}

export default App;
