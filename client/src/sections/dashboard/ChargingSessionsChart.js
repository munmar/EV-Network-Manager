import React from 'react';

import { Card, CardHeader, CardContent } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
const ChargingSessionsChart = ({ sessionsData }) => {
    /* TODO
    * Add select input as action in Card Header
    * Add responsiveness by monthly data.
    * */

    return (
        <Card sx={{ borderRadius: 4, border: 3, borderColor: 'secondary.main', backgroundColor: 'secondary.lightest' }}>
            <CardHeader
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
                titleTypographyProps={{
                    fontWeight: 500
                }}
                title="Charging Session"
            />
            <CardContent sx={{width: '100%', height: '100%'}}>
                <LineChart
                    xAxis={[{ scaleType: 'band', data: ['Week 1' , 'Week 2', 'Week 3', 'Week 4'] }]}
                    series={[
                        {
                            curve: 'linear',
                            data: sessionsData,
                            label: 'Number of Sessions',
                        },
                    ]}
                    height={350}
                />
            </CardContent>
        </Card>
    )
};
export default ChargingSessionsChart;
