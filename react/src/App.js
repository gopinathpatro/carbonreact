import React, { Component, Suspense } from "react";
// import CustomTable from './components/datatables/CustomTable.js';
import "./App.css";

const CustomTable = React.lazy(() =>
  import("./components/datatables/CustomTable.js")
);

class App extends Component {
  state = {
    loading: false,
    userData: [],
    header: [],
    menus: [
      {
        name: "SaveAs",
        id: "id001",
      },
      {
        name: "Copy",
        id: "id002",
      },
      {
        name: "Delete",
        id: "id003",
      },
    ],
  };
  componentDidMount = () => {
    fetch("http://localhost:9091/customer/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          userData: data.Customers,
          header: data.Headers,
          origData: data.Customers,
          loading: true,
        });
      })
      .catch(console.log);
  };
  render = () => {
    console.log(this.state.userData);
    console.log(this.state.header);
    return (
      <div className="App">
        <Suspense fallback={<h1>Loading data...</h1>}>
          <CustomTable
            rows={this.state.userData}
            loading={this.state.loading}
            menus={this.state.menus}
            header={this.state.header}
          />
        </Suspense>
      </div>
    );
  };
}

export default App;
