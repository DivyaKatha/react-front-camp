import React, {Component} from 'react'
import './Filter.css'

class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="container">
                    <div className="found">
                        7 movie found
                    </div>
                    <div className="sortByList">
                        <ul className="sortOptions">
                            <li>SORT BY</li> 
                            <li><a href="#">RELEASE DATE</a></li>
                            <li><a href="#">RATING</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;