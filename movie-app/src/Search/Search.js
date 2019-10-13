import React, {Component} from 'react'
import '../Search/Search.css'

class Search extends Component {
    render() {
        return (
        <div className="search">
            <div className="searchInput">
                <form className="searchForm">
                    <input id="inputValue" type="text" placeholder="search..."></input>
                    <button id="btnSearch">Search</button>
                </form>
            </div>
        </div>
        );
    }
}

export default Search;