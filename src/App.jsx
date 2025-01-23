import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [zipCode, setZipCode] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchApiData = async (zipCode) => {
    try {
      const response = await axios.get(`https://api.zippopotam.us/us/${zipCode}`);
      console.log("response", response);
      setData(response.data);
    } catch (error) {
      console.log("error", error.message);
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApiData(zipCode);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          value={zipCode} 
          onChange={(e) => setZipCode(e.target.value)} 
          placeholder="Enter a zip code" 
        />
        <button type="submit">Get Location</button>
      </form>
      {error ? (
        <p>Oops! Something went wrong: {error}</p>
      ) : (
        data && (
          <div>
            <p>Country: {data.country}</p>
            <p>Country Abbreviation: {data['country abbreviation']}</p>
            <p>Place Name: {data.places[0]['place name']}</p>
          </div>
        )
      )}
    </>
  );
}

export default App;
