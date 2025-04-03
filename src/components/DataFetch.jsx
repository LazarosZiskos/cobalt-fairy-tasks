import axios from "axios";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

// TASK 1 //

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [sortAsc, setSortAsc] = useState(false);

  useEffect(() => {
    // Get Token
    const getData = async () => {
      try {
        const getToken = await axios.post("/api/login", {
          username: "dev1",
          password: "12cf#$!@34",
        });
        const token = getToken.data.token;

        // Get Posts
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

  // Sort Posts by ID
  const sortPostsById = () => {
    const sorted = [...posts].sort((a, b) => {
      return sortAsc ? a.id - b.id : b.id - a.id;
    });
    setPosts(sorted);
    setSortAsc(!sortAsc);
  };

  return (
    <div>
      <h2>Posts</h2>
      {posts.length > 0 ? (
        <table border={5} cellPadding={8} cellSpacing={2}>
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
        <p>Posts Loading...</p>
      )}
    </div>
  );
};

export default Posts;
