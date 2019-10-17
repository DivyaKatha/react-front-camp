import React, {Component} from 'react'
import Search from '../Search/Search'
import Results from '../Results/Results'
import Filter from '../Filter/Filter';
import ViewMovie from '../ViewMovie/ViewMovie';

class Home extends Component {

    render() {
        return (
            <div className="home">
                <Search search={(input, category) => this.props.onSearch(input, category)} ></Search>
                <Filter count={this.props.movies.length} sortBy={this.props.sortBy} ></Filter>
                <Results movies={this.props.movies} selectMovie={this.props.selectedMovie}></Results>
            </div>
        );
    }
}

export default Home;