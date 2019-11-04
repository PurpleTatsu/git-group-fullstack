import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    }
  }

  componentDidMount = async () => {
    let response = await axios.get('http://localhost:3000/')
    let message = response.data.message;
    this.setState({
      message
    })
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default App;