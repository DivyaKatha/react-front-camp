import React, {Component} from 'react'
import '../Search/Search.css';
import Title from '../Title/Title';

class Search extends Component {

    state = {
        input: '',
        category: 'title'
    }

    btnStyle = {
        color:'white' ,
        width: '100px',
        height: '30px',
        margin: '10px',
        borderRadius: '10px'
    }

    highlightClass = {
        ...this.btnStyle,
        backgroundColor: '#ff0000'
    }

    defaultClass = {
        ...this.btnStyle,
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
   
    titleStyle = {...this.highlightClass};

    genreStyle = {...this.defaultClass}

    getInputValue = (eve) => {
        this.setState({
            input: eve.target.value
        })
    }

    setCategory = (cat) => {
        this.setState({category: cat});
        if(cat ==='title'){
            this.titleStyle = {...this.highlightClass};
            this.genreStyle = {...this.defaultClass}
        }

        if(cat ==='genre'){
            this.titleStyle = {...this.defaultClass}
            this.genreStyle = {...this.highlightClass};
        }   
    }

    onSearch = () => {
        this.props.search(this.state.input, this.state.category);
    }

    render() {
        return (
        <div className="search">
            <div className="searchInput">
                <Title></Title>
                <div className="searchForm">
                    <input id="inputValue" type="text" placeholder="search..." onChange={this.getInputValue} ></input>
                    <button id="btnSearch" onClick={this.onSearch}>Search</button>
                </div>
                <div style={{'color': 'white', 'fontWeight': 'bold'}}>
                    <span>SEARCH BY:</span>
                    <button onClick={() => this.setCategory('title')} id="btnTitle" style={this.titleStyle}>Title</button>
                   <button onClick={() => this.setCategory('genre')}  id="btnGenre" style={this.genreStyle}>Genre</button>
                </div>
            </div>
        </div>
        );
    }
}

export default Search;