import React from 'react';
import CustomTable from './components/datatables/CustomTable.js';
import './App.css';

function App() {
  const rows = [{
    "FirstName": "Gopinath",
    "LastName": "Patro",
    "id": "G001",
    "Address": "Odisha",
    "Country": "India"
  }, {
      "FirstName": "Ravishankar",
      "LastName": "Ramaswamy",
      "id": "G002",
      "Address": "Shimoga",
      "Country": "India"
    }, {
      "FirstName": "Naveen",
      "LastName": "G",
      "id": "G003",
      "Address": "Tumkur",
      "Country": "India"
    }, {
      "FirstName": "Dipak",
      "LastName": "Pratap",
      "id": "G004",
      "Address": "Odisha",
      "Country": "India"
    }];
  return (
    <div className="App">
      <CustomTable rows={rows}/>
    </div>
  );
}

export default App;
