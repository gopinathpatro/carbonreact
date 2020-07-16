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
  "ProgressState": null,
  "Description": null,
  "MemoryMode": "Dedicated",
  "MigrationState": "Not_Migrating",
  "PowerManagementMode": null,
  "OperatingSystemVersion": "Unknown",
  "PartitionID": 768,
  "IsVirtualServiceAttentionLEDOn": "false",
  "AllocatedVirtualProcessors": 1,
  "PartitionState": "not activated",
  "ResourceMonitoringIPAddress": null,
  "HasPhysicalIO": "false",
  "SharingMode": "uncapped",
  "UUID": "4D47F7F2-DC81-4E45-B4D8-1611E844291C",
  "CurrentProcessors": null,
  "LastActivatedProfile": "default_profile",
  "RemoteRestartState": "Invalid",
  "PartitionType": "AIX/Linux",
  "PartitionName": "brazos4aix11678",
  "RMCState": "inactive",
  "CurrentMemory": 3072,
  "HasDedicatedProcessors": "false",
  "AssociatedManagedSystem": "https://9.126.171.97:443/rest/api/uom/ManagedSystem/eb178b02-0ab1-3521-8a84-8ca28187c28c",
  "ReferenceCode": "00000000",
  "CurrentProcessingUnits": 0.06
}, {
  "ProgressState": null,
  "Description": null,
  "MemoryMode": "Dedicated",
  "MigrationState": "Not_Migrating",
  "PowerManagementMode": null,
  "OperatingSystemVersion": "Unknown",
  "PartitionID": 767,
  "IsVirtualServiceAttentionLEDOn": "false",
  "AllocatedVirtualProcessors": 1,
  "PartitionState": "not activated",
  "ResourceMonitoringIPAddress": null,
  "HasPhysicalIO": "false",
  "SharingMode": "uncapped",
  "UUID": "4DB13C69-16C9-4CDA-87D3-90BD03DE1C87",
  "CurrentProcessors": null,
  "LastActivatedProfile": "default_profile",
  "RemoteRestartState": "Invalid",
  "PartitionType": "AIX/Linux",
  "PartitionName": "brazos4aix1167",
  "RMCState": "inactive",
  "CurrentMemory": 3072,
  "HasDedicatedProcessors": "false",
  "AssociatedManagedSystem": "https://9.126.171.97:443/rest/api/uom/ManagedSystem/eb178b02-0ab1-3521-8a84-8ca28187c28c",
  "ReferenceCode": "00000000",
  "CurrentProcessingUnits": 0.06
}, {
  "ProgressState": null,
  "Description": null,
  "MemoryMode": "Dedicated",
  "MigrationState": "Completed",
  "PowerManagementMode": null,
  "OperatingSystemVersion": "Unknown",
  "PartitionID": 766,
  "IsVirtualServiceAttentionLEDOn": "false",
  "AllocatedVirtualProcessors": null,
  "PartitionState": "not activated",
  "ResourceMonitoringIPAddress": null,
  "HasPhysicalIO": "false",
  "SharingMode": "sre idle proces",
  "UUID": "0BE5A910-508D-460A-9E66-27FF4A029A07",
  "CurrentProcessors": 2,
  "LastActivatedProfile": "default_profile",
  "RemoteRestartState": "Invalid",
  "PartitionType": "OS400",
  "PartitionName": "IBMi1_TIO",
  "RMCState": "none",
  "CurrentMemory": 512,
  "HasDedicatedProcessors": "true",
  "AssociatedManagedSystem": "https://9.126.171.97:443/rest/api/uom/ManagedSystem/eb178b02-0ab1-3521-8a84-8ca28187c28c",
  "ReferenceCode": "00000000",
  "CurrentProcessingUnits": null
}, {
  "ProgressState": null,
  "Description": null,
  "MemoryMode": "Dedicated",
  "MigrationState": "Not_Migrating",
  "PowerManagementMode": null,
  "OperatingSystemVersion": "Unknown",
  "PartitionID": 765,
  "IsVirtualServiceAttentionLEDOn": "false",
  "AllocatedVirtualProcessors": 1,
  "PartitionState": "not activated",
  "ResourceMonitoringIPAddress": null,
  "HasPhysicalIO": "false",
  "SharingMode": "uncapped",
  "UUID": "04162CC9-32B1-4C7F-9D1D-204653ACDE7D",
  "CurrentProcessors": null,
  "LastActivatedProfile": "default_profile",
  "RemoteRestartState": "Invalid",
  "PartitionType": "AIX/Linux",
  "PartitionName": "kk_test",
  "RMCState": "inactive",
  "CurrentMemory": 1024,
  "HasDedicatedProcessors": "false",
  "AssociatedManagedSystem": "https://9.126.171.97:443/rest/api/uom/ManagedSystem/eb178b02-0ab1-3521-8a84-8ca28187c28c",
  "ReferenceCode": "00000000",
  "CurrentProcessingUnits": 0.1
}];

const headers = [
  {
    key: "PartitionName",
    header: "PartitionName"
  },
  {
    key: "PartitionID",
    header: "PartitionID"
  },
  {
    key: "ProgressState",
    header: "ProgressState"
  },
  {
    key: "Description",
    header: "Description"
  },
  {
    key: "MemoryMode",
    header: "MemoryMode"
  },
  {
    key: "MigrationState",
    header: "MigrationState"
  },
  {
    key: "PowerManagementMode",
    header: "PowerManagementMode"
  },
  {
    key: "Type",
    header: "PartitionType"
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
