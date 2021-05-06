import React from "react";
import "./SearchResultItems.css";
export default function SearchResultItems({
  searchResultItems,
  showResults,
  query
}) {

  const handleResults = ({ 
    owner: { html_url: url },
    owner: { avatar_url },
    full_name: fullName,
    html_url: htmlUrl,
    description,
   }) => {

    return (
      <div>
        <li style={{ backgroundColor: listColorHandler() }}>
          <h3>{description}</h3>
          <a href={htmlUrl}>Repository's Home Page</a>
          <p>{fullName}</p>
          <img src={avatar_url} />
          <a href={url}>User profile</a>
        </li>
      </div>
    );

  }

  const style = {
    backgroundColor: "#eee",
  };

  const listColorHandler = () => {
    return style.backgroundColor == "#eee"
      ? (style.backgroundColor = "#bbb")
      : (style.backgroundColor = "#eee");
  };
  return (
    <div>
      { !searchResultItems.length ? <h2>No Results for your search!</h2> :
        <div>
          {showResults && <h3 id="toggleresults">Showing results for: {query}</h3>}
          <div>
            <ul>
              {searchResultItems.map((searchResultItem) => (
                handleResults(searchResultItem)
              ))}
            </ul>
          </div>
        </div>
      }
    </div>
  );
}

//This are the required items from our fetch you can see them in our original js project
