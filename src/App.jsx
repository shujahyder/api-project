import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchApiData = async () => {
    try {
      const response = await axios.get(`https://ipinfo.io/2001:4860:7:222::ff/geo`);
      console.log("response", response);
      setData(response.data);
    } catch (error) {
      console.log("error", error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <>
      {error ? (
        <p>Oops! Something went wrong: {error}</p>
      ) : (
        data && data.ip && (
          <ul>
            <li>City: {data.city}</li>
            <li>Region: {data.region}</li>
            <li>Country: {data.country}</li>
          </ul>
        )
      )}
    </>
  );
}

export default App;
