import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'time', headerName: 'Time', width: 100 },
  { field: 'history', headerName: 'History', width: 100 },
];

export default function DataTable(props) {
  return (
    <div style={{ margin: '2% 0% 3% 10% ' , height: '400px', width: '300px' }}>
      <DataGrid rows={props.rows} columns={columns} pageSize={10} />
    </div>
  );
}
