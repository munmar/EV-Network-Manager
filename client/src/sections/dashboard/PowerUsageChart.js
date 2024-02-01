import React from 'react';

import { Card, CardHeader, CardContent } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const PowerUsageChart = () => {
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
                title='Power Usage'
            />
            <CardContent sx={{ width: '100%', height: '100%'}}>
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                        },
                    ]}
                    height={350}
                />
            </CardContent>
        </Card>
    )
};
export default PowerUsageChart;
