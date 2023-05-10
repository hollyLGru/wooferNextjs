import Main from '../components/Main';
import { useEffect, useState, useContext } from 'react';

export default function Home() {
    // const [results, setResults] = useState(null);
    // const accessToken = useContext(AuthContext);

    // useEffect(() => {
    //     if(accessToken === null) return;
    //     const fetchPets = async () => {
    //         const petResults = await fetch("https:api.petfinder.com/v2/animals", {
    //             headers: {
    //                 Authorization: `Bearer ${accessToken}`
    //             }
    //         });
    //         const json = await petResults.json();
    //         setResults(json.animals)
    //     };
    //     fetchPets()
    // }, [accessToken]);

    // if (results === null) return null;
  return (
    <div>
      <Main/>
    </div>
  )
}