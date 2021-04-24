import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import SearchForm from "./SearchForm/SearchForm";
import SearchResultItems from "./SearchResultItems/SearchResultItems";

function App() {
  // defining states
  const [searchResultItems, setSearchResultItems] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const isInitialMount = useRef(true);
  // defining API link
  const GITHUB_API_URL = "https://api.github.com";

  // we will use the query state below to search for users and repos keep it in mind ;)
  // this => const [query, setQuery] = useState();

  useEffect(() => {
    if(isInitialMount.current){
      isInitialMount.current=false
    }
    else{
      getGithubRepoSearchUrl();
    }
  }, [query]);

  // Fetch repositories from the internet
  function getGithubRepoSearchUrl() {
    fetch(`${GITHUB_API_URL}/search/repositories?q=${query}&page=1&per_page=10`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResultItems(data.items);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally");
      });
  }
  return (
    <div>
      <div class="form-container">
      <h2>Search For Repositories</h2>
      <SearchForm
        search={search} //this is a prop
        setSearch={setSearch} //this is a prop
        query={query}
        setQuery={setQuery}
        setShowResults={setShowResults}
      />
      </div>
      {showResults? <h3>Showing Results for: {query} </h3> : ''}
      <SearchResultItems
        searchResultItems={searchResultItems}
        showResults={showResults}
        query={query} //this is a prop
      />
    </div>
  );
}
export default App;