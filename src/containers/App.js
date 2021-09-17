import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import axios from 'axios';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        const getData = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            this.setState({ robots: res.data });
        };

        getData();

        
    }

    onsearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className='tc'>
              <h1 className='f1'>Robofriends</h1>
              <SearchBox searchChange={this.onsearchChange}/>
              <Scroll>
                <CardList robots={filteredRobots}/>
              </Scroll>
            </div>
        );
    }
    
}

export default App;