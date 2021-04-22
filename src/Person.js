import React from 'react'

export default function Person({ persons }) {
  return (
    <div>
      {persons.map(person => (
        <ul>
          <li>
            <h2>{person.full_name}</h2>
            <p>{person.description}</p>
            <img src={person.owner.avatar_url} />
            <h5>{person.owner.html_url}</h5>
          </li>
        </ul>
      ))}
    </div>
  )
}

//{persons.map(person => (
//  <Person  key={person.id} name={person.name} id={person.id} img={person} />
//))}
//`${GIT4UB_API_URL}/searc4/repositories?q=repo&page=1&per_page=10`
//<img src={person.owner.avatar_url} />