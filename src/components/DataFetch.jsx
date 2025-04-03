import axios from "axios";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import "./DataFetch.scss";

// TASK 1 - Fetch and Display posts from protected API //

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [sortAsc, setSortAsc] = useState(false);

  useEffect(() => {
    // Fetch token and post data when component mounts
    const getData = async () => {
      try {
        // Login to get JWT token
        const getToken = await axios.post("/api/login", {
          username: "dev1",
          password: "12cf#$!@34",
        });
        const token = getToken.data.token;

        // Use token to fetch protected post data
        const getPosts = await axios.get("/api/posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setPosts(getPosts.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  // Sort Posts by ID Ascending/Descending order
  const sortPostsById = () => {
    const sorted = [...posts].sort((a, b) => {
      return sortAsc ? a.id - b.id : b.id - a.id;
    });
    setPosts(sorted);
    setSortAsc(!sortAsc);
  };

  return (
    <div className="posts-container">
      <h2>Posts</h2>
      {posts.length > 0 ? (
        <table border={1} cellPadding={8} cellSpacing={2}>
          <thead>
            <tr>
              <th
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
                onClick={sortPostsById}
              >
                ID{" "}
                {sortAsc ? (
                  <FaChevronDown color="red" size={20} />
                ) : (
                  <FaChevronUp color="red" size={20} />
                )}
              </th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // Loading message while data is being fetched
        <p className="loading-message">Posts Loading...</p>
      )}
    </div>
  );
};

export default Posts;
