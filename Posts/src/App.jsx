import { useState, useEffect } from "react";
import PostList from "./components/PostList";
import { fetchPosts, addPost } from "./api/api";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  const handleAddPost = () => {
    addPost(newPost, posts, setPosts);
    setNewPost("");
  };

  return (
    <div>
      <h1>Posts</h1>
      <PostList posts={posts} setPosts={setPosts} />
      <input
        type="text"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="New Post Title"
      />
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
}

export default App;
