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
  "FirstName": null,
  "LastName": null,
  "ID": "Dedicated",
  "Address": "Not_Migrating",
  "Country": null
}, {
    "FirstName": null,
    "LastName": null,
    "ID": "Dedicated",
    "Address": "Not_Migrating",
    "Country": null
}, {
    "FirstName": null,
    "LastName": null,
    "ID": "Dedicated",
    "Address": "Not_Migrating",
    "Country": null
}, {
    "FirstName": null,
    "LastName": null,
    "ID": "Dedicated",
    "Address": "Not_Migrating",
    "Country": null
}];

const headers = [
  {
    key: "Name",
    header: "First Name"
  },
  {
    key: "LName",
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

class HMCTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: plans,
      startRow: 0,
      endRow: 5
    };
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
    return (
      <div>
        <DataTable
          rows={this.state.plans.slice(this.state.startRow, this.state.endRow)}
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
                  <TableToolbarSearch
                    onChange={this.handleOnInputValueChange}
                  /> 
                  <TableToolbarMenu>
                    <TableToolbarAction>Hello</TableToolbarAction>
                  </TableToolbarMenu>
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
                    {rows.map(row => (
                      <TableRow key={row.UUID}>
                        <TableSelectRow {...getSelectionProps({ row})} />
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

export default HMCTable;
