import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseEffectApi = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the JSONPlaceholder API when the component mounts
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });

    // Cleanup function to cancel any ongoing requests when the component unmounts
    return () => {
      // Cancel the API request, if necessary (optional)
    };
  }, []); // Empty dependency array ensures the effect runs only once after the initial render.

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts from JSONPlaceholder API:</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectApi;;
