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

const plans = [{
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
    key: "ID",
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

const menus = [{ "name": "Save" }, { "name": "Copy" }, { "name":"Delete"}];

class CustomTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: plans,
      menus: menus,
      startRow: 0,
      endRow: 5
    };
  }
  
  handleMenuChange(menuItem) {
      console.log("Clicked: " + menuItem);
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
      let filteredPlans = plans.filter(obj => {
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
      this.setState({ plans: filteredPlans });
    } else {
      this.setState({ plans });
    }
  };

  render() {
    console.log("plans size", this.state.plans.length);
    plans.map(r => console.log(r));
    return (
      <div>
        <DataTable
          rows={this.state.plans}
          headers={headers}
          render={({
            rows,
            headers,
            getHeaderProps,
            getRowProps,
            getSelectionProps,
            getBatchActionProps,
            selectedRows,
            onInputChange,
            selectRow
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
                        this.state.menus.map(menu => (<TableToolbarAction key={menu.name} onClick={this.handleMenuChange(menu.name)}>{menu.name}</TableToolbarAction>))
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
                  totalItems={this.state.plans.length}
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
