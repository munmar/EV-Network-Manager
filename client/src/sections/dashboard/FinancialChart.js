import React from 'react';

import { Card, CardHeader, CardContent } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
const FinancialChart = () => {
    /** Replace placeholder data with real values from database
     * Will require: API, State
     * Data:
     */

    return (
        <Card sx={{ borderRadius: 4, border: 3, borderColor: 'secondary.main', backgroundColor: 'secondary.lightest' }}>
            <CardHeader
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
                titleTypographyProps={{
                    fontWeight: 500
                }}
                title="Financial Report"
            />
            <CardContent sx={{width: '100%', height: '100%'}}>
                <BarChart
                    xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar'] }]}
                    yAxis={[{label: 'Revenue'}]}
                    series={[{ data: [4, 3, 5] }]}
                    height={300}
                />
            </CardContent>
        </Card>
    )
};
export default FinancialChart;
