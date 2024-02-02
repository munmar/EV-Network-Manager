import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Chip, List, ListItem, ListItemText} from "@mui/material";

function createData(name, location, status, connectors) {
  return { name, location, status, connectors };
}

// EXAMPLE DATA => Will be replaced by real data (fake-data) from database.
const rows = [
  createData('Station 1',
      'Example Location ABC 123',
      ['Online', 'Connected', 'Offline'],
      ['Connector 1: Type 1, AC, 3.6 kW', 'Connector 2: Type 2, AC, 7 kW', 'Connector 3: CCS, DC, 50 kW']
  ),
  createData('Station 2',
      'Example Location MNO 456',
      ['Online', 'Offline'],
      ['Connector 1: Type 2, AC, 7 kW', 'Connector 2: CHAdeMO, DC, 50 kW']
  ),
  createData('Station 3',
      'Example Location XYZ 789',
      ['Faulty'],
      ['Connector 1: CCS, DC, 50 kW']
  ),
];

export default function BasicTable() {
  // Chip colour function
  const statusColor = (status) => {
    switch (status) {
      case 'Connected':
        return 'info'
      case 'Offline':
        return 'error'
      case 'Faulty':
        return 'warning'
      default:
        return 'success'
    }
  }

  return (
    <TableContainer component={Paper} sx={{maxHeight: 300, width: '100%', borderRadius: 4}}>
      <Table sx={{ maxHeight: 300 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: '#dedede'}}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Connector List</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ verticalAlign: 'top' }}>{row.name}</TableCell>
              <TableCell align="left" sx={{ verticalAlign: 'top' }}>{row.location}</TableCell>
              <TableCell align="left" sx={{ width: '20%', py: 0, px: 0}}>
                <List>
                  {row.status.map((status) => (
                      <ListItem key={status}>
                        <Chip label={status} sx={{ color: `${statusColor(status)}.dark`, backgroundColor: `${statusColor(status)}.lightest` }}/>
                      </ListItem>
                  ))}
                </List>
              </TableCell>
              <TableCell align="right" sx={{ py: 0, px: 0 }}>
                <List>
                  {row.connectors.map((connector) => (
                      <ListItem key={connector}>
                        <ListItemText primary={connector} />
                      </ListItem>
                  ))}
                </List>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}