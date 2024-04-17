import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    // Define state to store the fetched data
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to fetch data from the API
    const fetchData = async () => {
        try {
            const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
            const jsonData = await response.json();
            setData(jsonData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {/* Render your data here */}
                    {data && (
                        <ul>
                            {data.map(item => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default MyComponent;
