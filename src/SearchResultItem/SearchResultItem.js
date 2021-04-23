import React from 'react'

export default function Person({ persons }) {
  return (
    <div>
      {persons.map(person => (
        <ul>
          <li>
            <h2>{person.full_name}</h2>
            <h2>{person.html_url}</h2>
            <p>{person.description}</p>
            <img src={person.owner.avatar_url} />
            <h5>{person.owner.html_url}</h5>
          </li>
        </ul>
      ))}
    </div>
  )
}

//This are the required items from our fetch you can see them in our original js project