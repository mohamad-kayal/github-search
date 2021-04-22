import React, { useState, useEffect } from "react";
import { render } from 'react-dom';
import UserData from './UserData/UserData';
import SearchForm from './SearchForm/SearchForm';
import SearchResultItem from './SearchResultItem/SearchResultItem';
import "./App.css";

const GITHUB_API_URL = 'https://api.github.com';

const App = () => {
  const searchRepositoriesHandler = ()=>{

  }
  return (
    <div>
      <h1>Search For Repositories</h1>
      <button onClick={incrementCounter}>Search!</button>
    </div>
  );
};

export default App;
