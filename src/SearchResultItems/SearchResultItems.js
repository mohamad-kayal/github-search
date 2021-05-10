import React, { useState } from "react";
import "./SearchResultItems.css";
import ReactPaginate from "react-paginate";

export default function SearchResultItems({
  searchResultItems,
  showResults,
  query
}) {

  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 12;

  const pagesVisited = pageNumber * itemsPerPage;

  const pageCount = Math.ceil(searchResultItems.length / itemsPerPage);
  var counter = 0;
  const backgroundPicker = ["#849ab8", "#687c96", "#4c5c70"];
  const listColorHandler = () => {
    if(counter === 3) {
      counter = 0;
    }
    return backgroundPicker[counter++];
  };
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

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
              {searchResultItems
                .slice(pagesVisited, pagesVisited + itemsPerPage)
                .map(searchResultItem =>
                  handleResults(searchResultItem)
                )}
            </ul>
          </div>
          <ReactPaginate 
            previousLabel={"previous"}
            nextLabel={"next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"prev-link"}
            nextLinkClassName={"next-link"}
            disabledClassName={"disabled-link"}
            activeClassName={"active-link"}
          />
        </div>
      )}
    </div>
  );
}
