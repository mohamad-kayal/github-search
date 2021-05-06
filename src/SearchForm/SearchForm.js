// export default searchForm;
import React from "react";
import "./SearchForm.css";

export default function SearchForm({
  search,
  setSearch,
  setQuery,
  setShowResults,
}) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const makeSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setShowResults(true);
    setSearch('');
  };

  return (
    <div className="wrapper">
      <div className="banner">
        <h2>Welcome To GitHub Search</h2>
        <p>This is a website that makes different kinds of GitHub search</p>
        <p>queries using GitHub's API</p>
        <p>have Fun :)</p>
      </div>

      <form className="form" onSubmit={makeSearch}>
        <input
          type="text"
          id="input"
          required
          pattern=".{2,}"
          placeholder="Search for a repository..."
          value={search}
          onChange={handleChange}
        />
        <p className="options">Choose an option:</p>
        <br />
        <br />
     
        <div className="radio-left-group">
          
        <input
          className="radio-btn"
          type="radio"
          id="option1"
          name="option"
          value="option1"
        />
        <label className="radio-btn" for="option1">
          Option1
        </label>
        <br />

        <input
          className="radio-btn"
          type="radio"
          id="option2"
          name="option"
          value="option2"
        />

        <label className="radio-btn" for="option2">
          Option2
        </label>
        <br />
        </div>


        <div className="radio-right-group"> 
        <input
          className="radio-btn"
          type="radio"
          id="option3"
          name="option"
          value="option3"
        />

        <label className="radio-btn" for="option3">
          Option3
        </label>
        <br />

        <input
          className="radio-btn"
          type="radio"
          id="option4"
          name="option"
          value="option4"
        />
        <label className="radio-btn" for="option4">
          Option4
        </label>
        <br />
        </div>
        <button type="submit" id="btn-submit">Search!</button>
      </form>
    </div>
  );
}
