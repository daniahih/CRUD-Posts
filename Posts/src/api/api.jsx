import axios from "axios";

export const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response);
  return response.data.slice(0, 5);
};

export const updatePost = async (id, posts, setPosts) => {
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

export const deletePost = async (id, posts, setPosts) => {
  axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(() => {
    setPosts(posts.filter((post) => post.id !== id));
  });
};
export const addPost = async (newTitle, posts, setPosts) => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: newTitle,
      body: "This is the body",
      userId: 1,
    })
    .then((response) => {
      setPosts([...posts, response.data]);
    });
};
