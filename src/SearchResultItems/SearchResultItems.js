import React from "react";
import "./SearchResultItems.css";
export default function SearchResultItems({
  searchResultItems,
  showResults,
  query,
  error
}) {
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
          <ul>
            {searchResultItems.map((searchResultItem) => (
              <div>
                <li style={{ backgroundColor: listColorHandler() }}>
                  <h3>{searchResultItem.description}</h3>
                  <a href={searchResultItem.html_url}>Repository's Home Page</a>
                  <p>{searchResultItem.full_name}</p>
                  <img src={searchResultItem.owner.avatar_url} />
                  <a href={searchResultItem.owner.html_url}>User profile</a>
                </li>
              </div>
            ))}
          </ul>
        </div>
      }
    </div>
  );
}

//This are the required items from our fetch you can see them in our original js project
