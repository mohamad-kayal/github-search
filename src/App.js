import React, { useState, useEffect} from 'react';
import { render } from 'react-dom';
import UserData from './UserData/UserData';
import SearchForm from './SearchForm/SearchForm';
import SearchResultItem from './SearchResultItem/SearchResultItem';
import './App.css';

const GITHUB_API_URL = 'https://api.github.com';

const App = ()=>{

  const [items, setItems] = useState([]);

  // useEffect(()=>{
    
  //  fetch(getGithubRepoSearchUrl('react')).then((res)=>res.json())
  //  .then((data)=>{
  //     setItems([data.items])
  //   });
  //   // setItems(items.push(temp));
  //   console.log(items);
  // },[])
  function getGithubRepoSearchUrl(query) {
    return `${GITHUB_API_URL}/search/repositories?q=${query}&page=1&per_page=10`;
  } 
  return(<div></div>)
}
// Item component
// from component
// user data component

export default App;
