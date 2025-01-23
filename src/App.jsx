import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchApiData = async () => {
    try {
      const response = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
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
          <div>
            <p>{data.setup}</p>
            <p>{data.punchline}</p>
          </div>
        )
      )}
    </>
  );
}

export default App;
