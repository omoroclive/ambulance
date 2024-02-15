import React, { useState, useEffect } from 'react';


const Ambulance = () => {
  const [ambulances, setAmbulances] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = () => {
    // Query to fetch ambulance data
    const query = 'SELECT * FROM ambulances';

    
  };

  return (
    <div>
      <h2>Ambulance Page</h2>
      <ul>
        {ambulances.map((ambulance) => (
          <li key={ambulance.id}>
            {ambulance.name} - {ambulance.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ambulance;
