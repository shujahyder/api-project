import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchApiData = async () => {
    try {
      const response = await axios.get(`https://api.ipify.org?format=json`);
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
        data && (
          <p>
            {data.ip}
          </p>
        )
      )}
    </>
  );
}

export default App;
