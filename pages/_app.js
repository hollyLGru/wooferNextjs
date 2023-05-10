import '../styles/global.css'
import React from 'react';
import {useEffect, createContext, useState} from "react"

const AuthContext = createContext();
const petFinderKey = 'QufLibwW1Ry9MKuZ98gbJKmWW8W97OZ5QtdhUVCg9eNx7dS7J5';
const petFinderSecret = 'QssvzFWwIoOXBNM89H19a3FyjoFfR0MsWp7k3Pcm';


export default function App({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    const fetchAccessToken = async () =>{
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");
      params.append("client_id", petFinderKey);
      params.append("client_secret", petFinderSecret);
      const petFinderRes = await fetch(
        "https://api.petfinder.com/v2/oauth2/token",
        {
          method: "POST",
          body: params
        }
      );
      console.log(await petFinderRes.json)
    }
    fetchAccessToken()
  }, [])





  return
  <AuthContext.Provider value={accessToken}>
        <Component {...pageProps} />
  </AuthContext.Provider>

}
