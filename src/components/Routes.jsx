// Import the correct Results component
import { Results } from './pages/Results ';
import React from 'react';
import { Routes as Switch, Route, Navigate, redirect  } from 'react-router-dom';

export const Home = () => {
    // Use Navigate for redirection
    return  <Navigate to="/search" />;
  };

export const Routes = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route path="/" element={<Home />} />
        <Route exact path="/search" element={<Results />}/>
        <Route path="/imagesearch" element={<Results />}/>
      </Switch>
    </div>
  );
};
