import React, { Component, Suspense } from 'react';
// import CustomTable from './components/datatables/CustomTable.js';
import './App.css';

const CustomTable = React.lazy(() => import('./components/datatables/CustomTable.js'));

class App extends Component {
  state = {
    loading: false,
    userData: [],
    menus: [
      {
        "name": "SaveAs",
        "id": "id001"
      }, {
        "name": "Copy",
        "id": "id002"
      }, {
        "name": "Delete",
        "id": "id003"
      }],
    header: [
      {
        key: "FirstName",
        header: "First Name"
      },
      {
        key: "LastName",
        header: "Last Name"
      },
      {
        key: "id",
        header: "ID"
      },
      {
        key: "Address",
        header: "Address"
      },
      {
        key: "Country",
        header: "Country"
      }
    ]
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
          <CustomTable rows={this.state.userData} loading={this.state.loading} menus={this.state.menus} header={this.state.header} />
        </Suspense>
        
      </div>
    )
  }
  
}

export default App;
