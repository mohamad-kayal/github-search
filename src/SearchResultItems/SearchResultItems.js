import React from 'react'

export default function SearchResultItems({ SearchResultItems }) {
  return (
    <div>
      <ul>
      {SearchResultItems.map(SearchResultItem => (
          <li>
            <h3>{SearchResultItem.full_name}</h3>
            <h3>{SearchResultItem.html_url}</h3>
            <p>{SearchResultItem.description}</p>
            <img src={SearchResultItem.owner.avatar_url} />
            <a>{SearchResultItem.owner.html_url}</a>
          </li>
      ))}
      </ul>
    </div>
  )
}

//This are the required items from our fetch you can see them in our original js project