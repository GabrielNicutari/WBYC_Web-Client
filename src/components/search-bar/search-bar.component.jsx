import React from "react";
import './search-bar.styles.scss'
import { useState } from 'react'

function SearchBar(props) {
    const { onSearch } = props;

    const [searchText, setSearchText] = useState("");

    const handleInput = e => {
        const input = e.target.value;
        setSearchText(input);
    }

    const handleEnterKeyPressed = e => {
        if(e.key === "Enter") {
            onSearch(searchText);
        }
    }

    return (
        <div className="search-bar-box">
            <input
                className="search-bar-input"
                type="text"
                placeholder="Search recipe (by name, author)"
                onChange={handleInput}
                onKeyPress={handleEnterKeyPressed}
                value={searchText}
            />
        </div>
    );
}

export default SearchBar;

