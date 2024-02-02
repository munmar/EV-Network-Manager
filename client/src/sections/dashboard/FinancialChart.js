import React from 'react';

import { Card, CardHeader, CardContent } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
const FinancialChart = () => {
    /** Replace placeholder data with real values from database
     *
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
                    yAxis={[{label: "Revenue ('000)"}]}
                    series={[{ data: [12, 8.5, 13.7] }]}
                    height={300}
                />
            </CardContent>
        </Card>
    )
};
export default FinancialChart;
