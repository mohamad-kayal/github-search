// export default searchForm;
import React from "react";
import "./SearchForm.css";

export default function SearchForm({ search, setSearch, setQuery, setShowResults}) {

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const makeSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setShowResults(true);
  };

  return (
    <form onSubmit={makeSearch}>
      <label for="input" id="input-label">
        Enter At least 2 Characters:
      </label>
      <input
      type="text"
      id="input"
      required
      pattern=".{2,}"
      placeholder="Search for a repository..."
      value={search} 
      onChange={handleChange}
    />
    <button type="submit" id="btn-submit">Search!</button>
    </form>
  );
}
