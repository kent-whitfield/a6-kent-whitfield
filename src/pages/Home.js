import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import axios from "axios";

function Home() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {
    setAppState({ loading: true });

    // get api data using axios
    const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
    axios.get(apiUrl).then((posts) => {
      const allPosts = posts.data;
      setAppState({ loading: false, posts: allPosts.slice(0, 5) });
    });
  }, [setAppState]);

  return <Posts isLoading={appState.loading} posts={appState.posts} />;
}
export default Home;
