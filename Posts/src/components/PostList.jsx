/* eslint-disable react/prop-types */
import PostItem from "./PostItem";

// eslint-disable-next-line react/prop-types
function PostList({ posts, setPosts }) {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} posts={posts} setPosts={setPosts} />
      ))}
    </ul>
  );
}

export default PostList;
