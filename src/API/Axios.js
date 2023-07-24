import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Axios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-thirukkural.vercel.app/api?num=1');
        const data= response.data
        setData(data.line1 + data.line2)
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

export default Axios;
