import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchApiData = async (name) => {
    try {
      const response = await axios.get(`https://api.nationalize.io?name=${name}`);
      console.log("response", response);
      setData(response.data);
    } catch (error) {
      console.log("error", error.message);
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApiData(name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter a name to guess the nationality" 
        />
        <button type="submit">Enter</button>
      </form>
      {error ? (
        <p>Oops! Something went wrong: {error}</p>
      ) : (
        data && data.country && (
          <div>
            <p>The nationality of "{name}" is:</p>
            <p>{data.country[0].country_id}</p>
          </div>
        )
      )}
    </>
  );
}

export default App;
