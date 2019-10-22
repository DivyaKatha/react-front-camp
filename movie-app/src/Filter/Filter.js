import React, {Component} from 'react'
import './Filter.css'

class Filter extends Component {
    highlightClass = {
        backgroundColor: '#ff0000',
        color:'white' ,
        margin: '5px',
        height: '40px',
        padding:'8px',
        border: '1px solid #ff0000',
        'borderRadius': '10px' 
    }

    defaultClass ={
        backgroundColor: 'rgba(0,0,0,0.5)',
        color:'white',
        margin: '5px',
        height: '40px',
        padding:'8px',
        border: '1px solid black',
        'borderRadius': '10px' 
    }
   
    releaseStyle = {...this.defaultClass};

    ratingStyle  = {...this.defaultClass}

    sortBy = (val) => {
        if(val === 'releaseDate') {
            this.releaseStyle = {...this.highlightClass};
            this.ratingStyle = {...this.defaultClass};
        }
        else if(val === 'rating') {
            this.releaseStyle = {...this.defaultClass};
            this.ratingStyle = {...this.highlightClass};
        }

        this.props.sortBy(val);
    }
    render() {
        return (
            <div className="filter">
                <div className="container">
                    <div className="found">
                        {this.props.count} movies found
                    </div>
                    <div className="sortByList">
                        <ul className="sortOptions">
                            <li>SORT BY:</li> 
                            <li><button style={this.releaseStyle} onClick={() => this.sortBy('releaseDate')} >RELEASE DATE</button></li>
                            <li><button style={this.ratingStyle} onClick={() => this.sortBy('rating')}>RATING</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;