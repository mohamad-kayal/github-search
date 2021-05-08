import React from "react";
import "./SearchResultItems.css";
var counter =0;
export default function SearchResultItems({
  searchResultItems,
  showResults,
  query,
}) {
  const backgroundPicker = ["#9394c4", "#7879ab", "#6c6d96"];
  const listColorHandler = () => {
    if(counter==3)counter=0;
    return backgroundPicker[counter++];
  };

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
          <img src={avatar_url} />
          <h3 className="repo-desc">{description}</h3>
          <h4>
            {" "}
            <a className="repo-anchor" target="_blank" href={htmlUrl}>
              {fullName}
            </a>
          </h4>
          <h4>
            <a className="repo-anchor" href={url}>
              User profile
            </a>
          </h4>
        </li>
      </div>
    );
  };

  return (
    <div>
      {!searchResultItems.length ? (
        <h2>No Results for your search!</h2>
      ) : (
        <div>
          {showResults && (
            <h3 id="toggleresults">Showing results for: {query}</h3>
          )}
          <div>
            <ul>
              {searchResultItems.map(searchResultItem =>
                handleResults(searchResultItem)
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
