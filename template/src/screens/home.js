import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/test");
      console.log("first", response);
    }

    fetchData();
  }, []);

  return <h1>Home</h1>;
};

export default Home;
