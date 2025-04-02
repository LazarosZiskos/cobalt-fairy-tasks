import axios from "axios";

const Posts = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.post(
          "https://dev.cobaltfairy.online/api/posts",
          {
            username: "dev1",
            password: "12cf#$!@34",
          }
        );
        const token = response.data.token;
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
};

export default Posts;
