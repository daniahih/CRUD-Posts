import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState([]); // posts array
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
      setPosts(response.data.slice(0, 5));
    });
  }, []);

  const addPost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: newPost,
        body: "This is the body",
        userId: 1,
      })
      .then((response) => {
        setPosts([...posts, response.data]), setNewPost("");
      });
  };

  const updatePost = (id) => {
    console.log("Update function called with ID:", id); // Debug line
    const postToUpdate = posts.find((post) => post.id === id);
    console.log("Post to update:", postToUpdate); // Debug line

    if (postToUpdate) {
      const updatedTitle = prompt("Enter the new title:", postToUpdate.title);
      if (updatedTitle) {
        axios
          .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            title: updatedTitle,
          })
          .then((response) => {
            setPosts(
              posts.map((post) => (post.id === id ? response.data : post))
            );
          });
      }
    } else {
      console.error("Post not found for updating"); // Debug line
    }
  };
  const deletePost = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      });
  };
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => updatePost(post.id)}>Edit</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="New Post Title"
      />
      <button onClick={addPost}>Add Post</button>
    </>
  );
}
