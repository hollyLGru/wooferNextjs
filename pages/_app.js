import '../styles/global.css'
import React from 'react';
import {useEffect, createContext, useState} from "react"

const AuthContext = createContext();

export default function App({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    const fetchAccessToken = async () =>{
      const res = await fetch("/api/oauth-token");
      const json = await res.json();
      setAccessToken(json.access_token);
    }
    fetchAccessToken()
  }, [])

  console.log(accessToken)



  return
  <AuthContext.Provider value={accessToken}>
        <Component {...pageProps} />
  </AuthContext.Provider>

}
