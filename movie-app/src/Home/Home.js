import React, {Component} from 'react'
import Search from '../Search/Search'
import Results from '../Results/Results'
import Filter from '../Filter/Filter';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Search></Search>
                <Filter></Filter>
                <Results></Results>
            </div>
        );
    }
}

export default Home;