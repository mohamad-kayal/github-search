
import React, { useEffect, useState } from 'react';
import './App.css';
import UserData from './UserData/UserData';
import SearchForm from './SearchForm/SearchForm';
import SearchResultItem from './SearchResultItem/SearchResultItem';

function App() {
  const [persons,setPersons] = useState([]);
  const [search, setSearch] = useState('');

  // we will use the query state below to search for users and repos keep it in mind ;)
  // this => const [query, setQuery] = useState();
  const GITHUB_API_URL = 'https://api.github.com';

  useEffect(() => {
    getGithubRepoSearchUrl();
  }, [])

  //Below in our fetch i used default repo instead of ${query} just temporary 

  function getGithubRepoSearchUrl() {
    fetch(`${GITHUB_API_URL}/search/repositories?q=repo&page=1&per_page=10`)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data); this is for testing u call delete it 
      setPersons(data.items)
    })
  };

  return (
    <div>
      <SearchForm
        search={search} //this is a prop
        setSearch={setSearch} //this is a prop
      />
      <SearchResultItem 
        persons={persons} //this is a prop
      />
    </div>
  );

}

export default App;