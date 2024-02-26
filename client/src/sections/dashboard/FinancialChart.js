import React from 'react';

import { Card, CardHeader, CardContent } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
const FinancialChart = ({ revenueData, costData }) => {
    /* TODO
    * Add select input as action in Card Header.
    * Add Cost financials when selected. => Swap between Revenue and Cost data.
    * */
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // empty array of 0's for each month of year (len 12)
    const revenueNumbers = new Array(12).fill(0);

    // for entry in revenueData dict, assign revenue value to a zero placeholder in revenueNumbers [0] array.
    // These changes also fixed a CartesianContextProvider issue showing in the developer console.
    if (revenueData) {
        revenueData.forEach(({ month, revenue }) => {
            revenueNumbers[parseInt(month)] = revenue;
        })
    }
    // console.log('revenueData:', revenueData);
    // console.log('revenueNumbers:', revenueNumbers);
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
