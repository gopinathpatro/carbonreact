import React, { Component, Suspense } from 'react';
// import CustomTable from './components/datatables/CustomTable.js';
import './App.css';

const CustomTable = React.lazy(() => import('./components/datatables/CustomTable.js'));

class App extends Component {
  state = {
    loading: false,
    userData: []
  };
  componentDidMount = () => {
    fetch('http://localhost:8080/customer/all')
      .then(res => res.json())
      .then((data) => {
        this.setState({ userData: data, origData: data, loading: true })
      })
      .catch(console.log)
  }
  render = () => {
    console.log(this.state.userData);
    return (

      <div className="App">
        <Suspense fallback={<h1>Loading data...</h1>}>
            <CustomTable rows={this.state.userData} loading={this.state.loading} />
        </Suspense>
        
      </div>
    )
  }
  
}

export default App;
