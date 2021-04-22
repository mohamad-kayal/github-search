<<<<<<< HEAD
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

  const repositories = null;

  return (
    <div>
      <h1>Search For Repositories</h1>
      <button>Search!</button>
    </div>
  );
};
=======
import React, { useEffect, useState } from 'react';
import './App.css';
//import Person from './Person';
import SearchForm from './SearchForm';



function App() {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('react');

  const GITHUB_API_URL = 'https://api.github.com';

  useEffect(() => {
    getGithubRepoSearchUrl();
  }, [])

  function getGithubRepoSearchUrl() {
    fetch(`${GITHUB_API_URL}/search/repositories?q=repo&page=1&per_page=10`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //setPersons(data.items)
      //console.log(data.items);
    })
  };


  return (
    <div>
      <SearchForm 
        search={search} 
        setSearch={setSearch} 
        query={query}
        setQuery={setQuery}
      />
    </div>
  );

}
>>>>>>> "making the components"

export default App;