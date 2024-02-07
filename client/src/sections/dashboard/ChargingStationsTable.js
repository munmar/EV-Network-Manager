import React from 'react';

import {Card, CardHeader, CardContent, List, ListItem, Chip, ListItemText} from '@mui/material';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";


const ChargingStationsTable = ({ chargerStations }) => {

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
        <Card sx={{ borderRadius: 4, border: 3, borderColor: 'secondary.main', backgroundColor: 'secondary.lightest' }}>
            <CardHeader
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
                titleTypographyProps={{
                    fontWeight: 500
                }}
                title='Charging Station'
            />
            <CardContent>
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
                            {chargerStations.map((station) => (
                                <TableRow
                                    key={station.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" sx={{ verticalAlign: 'top' }}>{station.name}</TableCell>
                                    <TableCell align="left" sx={{ verticalAlign: 'top' }}>{station.location}</TableCell>
                                    <TableCell align="left" sx={{ width: '20%', py: 0, px: 0}}>
                                        <List>
                                            {station.charger_set.map((charger) => (
                                                <ListItem key={charger.id}>
                                                    <Chip label={charger.status} sx={{ color: `${statusColor(charger.status)}.dark`, backgroundColor: `${statusColor(charger.status)}.lightest` }}/>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </TableCell>
                                    <TableCell align="right" sx={{ py: 0, px: 0 }}>
                                        <List>
                                            {station.charger_set.map((charger) => (
                                                <ListItem key={charger.id}>
                                                    <ListItemText primaryTypographyProps={{ fontSize: '0.8755rem' }} primary={`Connector ${charger.id}: ${charger.charger_type}, ${charger.charger_capacity} kW`} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
};
export default ChargingStationsTable;
