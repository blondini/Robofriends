import React from 'react';
import CardList from '../Compnents/CardList';
import SearchBox from '../Compnents/SearchBox';
import ErrorBoundry from './ErrorBoundry'
import './App.css';
import Scroll from './Scroll';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      return response.json();
    }).then(users => {
      this.setState({robots: users});
    })
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render() {
    const filterdRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return <h1 className='tc'>Loading</h1>
    } else {
      return (<div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filterdRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>);
    }
  }
}

export default App;
