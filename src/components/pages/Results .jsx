import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results  = () => {
    const { results, loading, getResults, searchTerm } = useResultContext();
    const location = useLocation();
  
    useEffect(() => {
        if (searchTerm !== '') {
          if (location.pathname === '/search') {  // Change this line to '/imagesearch'
            getResults(`/search?q=${searchTerm}&num=10`);
          } else {
            getResults(`${location.pathname}?q=${searchTerm}&num=10`);
          }
        }
      }, [searchTerm, location.pathname]);
  
    if (loading) return <Loading />;
  
    switch (location.pathname) {
      case '/search':
        console.log(results)
       return (
          <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
            {results?.items?.map(({ link, title }, index) => (
              <div key={index} className="md:w-2/5 w-full">
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
                </a>
              </div>
            ))}
          </div>
        );
      case '/imagesearch':
        console.log(results)
        return (
            <div className="flex flex-wrap justify-center items-center">
              {results?.items?.map(({ originalImageUrl, title }, index) => (
                <div key={index} className="sm:p-3 p-5">
                  <img src={originalImageUrl} alt={title} loading="lazy" />
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
                </div>
              ))}
            </div>
          );
      default:
        return 'Error...';
    }
}
