import React from "react";
import "../App.css";

function SearchForm(props) {
  return (
    <form className="mt-3">
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for Employee by Name"
          id="search"
          size="30"
        />
        {/* <button onClick={props.handleFormSubmit} className="btn btn-primary ml-3 mt-3">
          Search
        </button> */}
      </div>
    </form>
  );
}

export default SearchForm;