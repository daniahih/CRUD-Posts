/* eslint-disable react/prop-types */
import { updatePost, deletePost } from "../api/api";

// eslint-disable-next-line react/prop-types
function PostItem({ post, posts, setPosts }) {
  return (
    <li>
      {post.title}
      <button onClick={() => updatePost(post.id, posts, setPosts)}>Edit</button>
      <button onClick={() => deletePost(post.id, posts, setPosts)}>
        Delete
      </button>
    </li>
  );
}

export default PostItem;
