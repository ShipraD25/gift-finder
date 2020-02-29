import React from "react";

function SearchBar(props) {
    return (

        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" aria-label="Search" {...props}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>

    )
}

export default SearchBar;