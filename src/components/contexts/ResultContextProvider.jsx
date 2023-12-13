import React, { createContext, useContext, useState } from 'react';


const ResultContext = createContext();
const baseUrl = 'https://google-search72.p.rapidapi.com';


export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
  
    const getResults = async (type) => {
      setLoading(true);
  
      const res = await fetch(`${baseUrl}${type}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
          'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
        },
      });


      const data = await res.json();
  
      setResults(data);
      setLoading(false);
    };
  
    return (
      <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
        {children}
      </ResultContext.Provider>
    );
  };
  
  export const useResultContext = () => useContext(ResultContext);