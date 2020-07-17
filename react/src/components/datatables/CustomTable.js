import React, { Component } from "react";
import { DataTable, Pagination, TableToolbarAction, TableToolbarMenu } from "carbon-components-react";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
  TableToolbar,
  TableToolbarContent,
  TableSelectRow,
  TableSelectAll,
  TableToolbarSearch,
  TableBatchActions,
  TableBatchAction
} = DataTable;

let userData = [];
const headers = [
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
];

const menus = [
  { "name": "Save",
    "id" : "id001"
  }, { "name": "Copy",
        "id" : "id002"
  }, { 
    "name":"Delete",
    "id" : "id003"
  }];

class CustomTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: props.rows,
      menus: menus,
      startRow: 0,
      endRow: 5
    };
  }
  
  handleMenuChange(event, menuItem, selRows) {
    let eventData = event;
    console.log(eventData);
      console.log("Clicked: " + menuItem.name + " -- " + event + " -- selected rows: " + selRows[0].id);
  }
  handlePageChange(e) {
    const startRow = e.pageSize * (e.page - 1);
    //console.log('startRow: ' + startRow);

    const endRow = e.pageSize * e.page;
    //console.log('endRow: ' + endRow);

    this.setState({ startRow: startRow, endRow: endRow });
  }

  handleOnInputValueChange = event => {
    if (event.target.value) {
      let filteredPlans = userData.filter(obj => {
        let match = false;
        Object.values(obj).forEach(value => {
          if (!match) {
            if (value &&
              value
                .toString()
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
            )
              match = true;
          }
        });

        return match;
      });

      console.log("filtered plans size", filteredPlans.length);
      this.setState({ userData: filteredPlans });
    } else {
      this.setState({ userData });
    }
  };
// <TableBatchActions {...getBatchActionProps()}>
//   <TableBatchAction onClick={this.handleMenuChange(selectedRows)}>Edit</TableBatchAction>
// </TableBatchActions>
  render() {
    console.log("plans size", this.state.userData.length);
    userData.map(r => console.log(r));
    return (
      <div>
        <DataTable
          rows={this.state.userData}
          headers={headers}
          render={({
            rows,
            headers,
            getHeaderProps,
            getRowProps,
            getSelectionProps,
            getBatchActionProps,
            onInputChange,
            selectedRows,

          }) => {
            return (
              <TableContainer title="DataTable">
              
                <TableToolbar>
                  
                <TableToolbarContent>
                    <TableToolbarSearch
                      onChange={this.handleOnInputValueChange}
                    />
                    <TableToolbarMenu>
                    {
                        this.state.menus.map(menu => (<TableToolbarAction key={menu.id} onClick={(e) => this.handleMenuChange(e ,menu, selectedRows)}>{menu.name}</TableToolbarAction>))
                    }
                    </TableToolbarMenu>
                    
                </TableToolbarContent>
                  
                </TableToolbar>
                
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableSelectAll {...getSelectionProps()} />
                      {headers.map(header => (
                        <TableHeader {...getHeaderProps({ header })}>
                          {header.header}
                        </TableHeader>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, i) => (
                      
                      <TableRow key={row.id}>
                        <TableSelectRow {...getSelectionProps({ row })} />
                        {row.cells.map(cell => (
                          <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Pagination
                  totalItems={this.state.userData.length}
                  pageSize={3}
                  pageSizes={[3, 6, 9]}
                  onChange={e => this.handlePageChange(e)}
                />
              </TableContainer>
            );
          }}
        />
      </div>
    );
  }
}

export default CustomTable;
