import React, { Component } from "react";
import {
  DataTable,
  Pagination,
  TableToolbarAction,
  TableToolbarMenu,
} from "carbon-components-react";

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
  TableBatchAction,
} = DataTable;

class CustomTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: props.rows,
      origData: props.rows,
      menus: props.menus,
      headers: props.header,
      startRow: 0,
      endRow: 5,
    };
  }

  handleMenuChange(event, menuItem, selRows) {
    let eventData = event;
    console.log(eventData);
    console.log(
      "Clicked: " +
        menuItem.name +
        " -- " +
        event +
        " -- selected rows: " +
        selRows[0].id
    );
  }
  handlePageChange(e) {
    const startRow = e.pageSize * (e.page - 1);
    //console.log('startRow: ' + startRow);

    const endRow = e.pageSize * e.page;
    //console.log('endRow: ' + endRow);

    this.setState({ startRow: startRow, endRow: endRow });
  }

  componentDidUpdate = () => {
    if (
      this.state.userData &&
      this.state.filteredData &&
      this.state.userData.length !== this.state.filteredData.length
    ) {
      console.log("filterdData : " + this.state.filteredData.length);
      this.setState({ ...this.state, userData: this.state.filteredData });
    }

    if (
      this.state.header &&
      this.props.header &&
      this.state.header.length !== this.props.header.length
    ) {
      this.setState({ ...this.state, headers: this.props.header });
    }
  };

  handleOnInputValueChange = (event) => {
    if (event.target.value) {
      let filteredPlans = this.state.userData.filter((obj) => {
        let match = false;
        Object.values(obj).forEach((value) => {
          if (!match) {
            if (
              value &&
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
      this.setState({ ...this.state, filteredData: filteredPlans });
    } else {
      this.setState({ ...this.state, filteredData: this.state.origData });
    }
  };

  render() {
    console.log("plans size", this.state.userData.length);
    this.state.userData.map((r) => console.log(r));
    return (
      <div>
        <DataTable
          rows={this.state.userData}
          headers={this.state.headers}
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
                      {this.state.menus.map((menu) => (
                        <TableToolbarAction
                          key={menu.name}
                          onClick={(e) =>
                            this.handleMenuChange(e, menu, selectedRows)
                          }
                        >
                          {menu.name}
                        </TableToolbarAction>
                      ))}
                    </TableToolbarMenu>
                  </TableToolbarContent>
                </TableToolbar>

                <Table>
                  <TableHead>
                    <TableRow>
                      <TableSelectAll {...getSelectionProps()} />
                      {headers.map((header) => (
                        <TableHeader {...getHeaderProps({ header })}>
                          {header.header}
                        </TableHeader>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody {...this.state.userData}>
                    {rows.map((row, i) => (
                      <TableRow key={row.id}>
                        <TableSelectRow {...getSelectionProps({ row })} />
                        {row.cells.map((cell) => (
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
                  onChange={(e) => this.handlePageChange(e)}
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
