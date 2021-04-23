// export default searchForm;
import React from "react";
import "./SearchForm.css";

export default function SearchForm({ search, setSearch }) {

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const makeSearch = (event) => {
    event.preventDefault();
    //setQuery(search);
  };

  return (
    <form onSubmit={makeSearch}>
      <input type="text" value={search} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}