import React from 'react';
import './SearchResultItems.css';


export default function SearchResultItems({ searchResultItems, showResults, query }) {
  return (
    <div>
      {showResults ? <h3>Showing results for: {query}</h3> : ''}
      <ul>
        {searchResultItems.map(searchResultItem => (
          <li>
            <h3>{searchResultItem.description}</h3>
            <a href={searchResultItem.html_url}>Repository's Home Page</a>
            <p>{searchResultItem.full_name}</p>
            <img src={searchResultItem.owner.avatar_url}/>
            <a href={searchResultItem.owner.html_url}>User profile</a>
          </li>
      ))}
      </ul>
    </div>
  );
}

//This are the required items from our fetch you can see them in our original js project