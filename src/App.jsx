import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    try {
      const response = await axios.get(`https://randomuser.me/api/`);
      console.log("response", response);
      setData(response.data.results[0]);
    } catch (error) {
      console.log("error", error.message);
      setError(error.message);
    }
  };

  return (
    <>
      {data && (
        <div>
          <p>Name: {data.name.first} {data.name.last}</p>
          <p>Age: {data.dob.age}</p>
          <p>Gender: {data.gender}</p>
          <img src={data.picture.large} alt="User" />
        </div>
      )}
      {error && (
        <p>Oops! Something went wrong: {error}</p>
      )}
    </>
  );
}

export default App;
