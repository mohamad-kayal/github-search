import React, { useEffect, useState } from 'react';
import './App.css';
//import Person from './Person';
import SearchForm from './SearchForm';



function App() {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState('');
  //const [query, setQuery] = useState('react');

  const GITHUB_API_URL = 'https://api.github.com';

  useEffect(() => {
    getGithubRepoSearchUrl();
  }, [])

  function getGithubRepoSearchUrl(query) {
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
      />
    </div>
  );

}
//      <Person
//persons={persons}
///>

export default App;