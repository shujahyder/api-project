import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    try {
      const response = await axios.get(`http://universities.hipolabs.com/search?country`);
      console.log("response", response);
      setData(response.data);
    } catch (error) {
      console.log("error", error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Alpha two Code</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0,5).map((university, index) => (
            <tr key={index}>
              <td>{university.name}</td>
              <td>{university.country}</td>
              <td>{university.alpha_two_code}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {error && (
        <p>Oops! Something went wrong: {error}</p>
      )}
    </>
  );
}

export default App;
