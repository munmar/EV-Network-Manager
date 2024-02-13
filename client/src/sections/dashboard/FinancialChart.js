import React from 'react';

import { Card, CardHeader, CardContent } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
const FinancialChart = ({ revenueData, costData }) => {
    /* TODO
    * Add select input as action in Card Header.
    * Add Cost financials when selected.
    * */
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const revenueNumbers = revenueData.map(data => data.revenue);

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
                    xAxis={[{ scaleType: 'band', data: monthNames }]}
                    series={[{ data: revenueNumbers, label: "Revenue", color: 'green' }]}
                    height={300}
                />
            </CardContent>
        </Card>
    )
};
export default FinancialChart;
