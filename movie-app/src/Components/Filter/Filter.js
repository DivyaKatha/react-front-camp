import React from 'react'
import './Filter.css'

const Filter = (props) => {
    let highlightClass = {
        backgroundColor: '#ff0000',
        color:'white' ,
        margin: '5px',
        height: '40px',
        padding:'8px',
        border: '1px solid #ff0000',
        'borderRadius': '10px' 
    }

    let defaultClass = {
        backgroundColor: 'rgba(0,0,0,0.5)',
        color:'white',
        margin: '5px',
        height: '40px',
        padding:'8px',
        border: '1px solid black',
        'borderRadius': '10px' 
    }
   
    let releaseStyle = {...defaultClass};

    let ratingStyle  = {...defaultClass}

    let sortBy = (val) => {
        if(val === 'releaseDate') {
            releaseStyle = {...highlightClass};
            ratingStyle = {...defaultClass};
        }
        else if(val === 'rating') {
            releaseStyle = {...defaultClass};
            ratingStyle = {...highlightClass};
        }

        props.sortBy(val);
    }

        return (
            <div className="filter">
                <div className="container">
                    <div className="found">
                        {props.count} movies found
                    </div>
                    <div className="sortByList">
                        <ul className="sortOptions">
                            <li>SORT BY:</li> 
                            <li><button style={releaseStyle} onClick={() => sortBy('releaseDate')} >RELEASE DATE</button></li>
                            <li><button style={ratingStyle} onClick={() => sortBy('rating')}>RATING</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }


export default Filter;