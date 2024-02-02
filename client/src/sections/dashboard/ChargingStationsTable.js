import React from 'react';

import { Card, CardHeader, CardContent } from '@mui/material';
import StationTable from '../../components/StationTable';

const ChargingStationsTable = ({ theme }) => {
    /** Replace placeholder data with real values from database
     * Will require: API, State
     */

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
                <StationTable theme={theme}/>
            </CardContent>
        </Card>
    )
};
export default ChargingStationsTable;
