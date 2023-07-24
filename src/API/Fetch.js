import React, { useState, useEffect } from 'react';

const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api-thirukkural.vercel.app/api?num=1');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setData(data.line1 + data.line2);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {data}
    </>
  );
};

export default Fetch;
