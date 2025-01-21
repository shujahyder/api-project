import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  useEffect(()=>{
    async function fetchApiData(){
      try{
        const response = await axios.get('https://catfact.ninja/fact')
console.log("response",response)
        setData(response.data);
            } catch (error) {
        console.log("error", error.message);
        setError(error.message);
            }
          }

          fetchApiData();
        }, []);

        const [data, setData] = useState(null);
        const [error, setError] = useState(null);

        return (
          <>
            {error ? (
        <p>Error: {error}</p>
            ) : (
        data && (
          <div>
            <p>{data.fact}</p>
          </div>
        )
            )}
          </>
        );
      }
      export default App;
