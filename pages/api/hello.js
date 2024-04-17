import React, { useState, useEffect } from 'react';
import Home from '@/src/components/sections/Home';
import About from '@/src/components/sections/About';

function Handler() {
  // Define state to hold the fetched data
  const [data, setData] = useState({});

  // Define the API endpoint URL
  const API_ENDPOINT = "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";

  // Fetch data from the API endpoint when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the API endpoint
  const fetchData = async () => {
    try {
      const response = await fetch(API_ENDPOINT);
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const splitUserName = (userName) => {
    const parts = userName.split(' ');
    const firstName = parts[0];
    const lastName = parts.slice(1).join(' '); // Join the remaining parts as the last name
    return { firstName, lastName };
  };

  const { firstName, lastName } = splitUserName(data.user?.about?.name || '');
  return (

    <div>
      <div>
        {/* Pass userName as a prop without using await */}
        <Home userName={firstName}
          experience={data.user?.about?.subTitle} />
         <About firstName={firstName} 
         lastName={lastName}/>
       

      </div>
    </div>
  );
}

export default Handler;
