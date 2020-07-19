import React, { Component } from 'react';
import CustomTable from './components/datatables/CustomTable.js';
import './App.css';

class App extends Component {
  state = {
    userData: []
  }

  componentDidMount = () => {
    fetch('http://localhost:8080/customer/all')
        .then(res => res.json())
        .then((data) => {
          this.setState({ userData: data })
        })
        .catch(console.log)
  }

  render = () => {
    console.log(this.state.userData);
    return (
      <div className="App">
        <CustomTable rows={this.state.userData} />
      </div>
    )
  }
  
}

export default App;
