import React from 'react';

import { Card, CardHeader, CardContent } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import PeriodSelect from "../../components/PeriodSelect";

const PowerUsageChart = ({ powerData, selectedYear, selectedMonth, onPeriodChange  }) => {
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
                action={
                    <PeriodSelect selectedYear={selectedYear} selectedMonth={selectedMonth} onPeriodChange={onPeriodChange}/>
                }
            />
            <CardContent sx={{ width: '100%', height: '100%'}}>
                {powerData ? (
                    // Formatter requires the following changes
                    // - Change x-axis based on year/month period selected
                    // - scale needs changing. For full year x-axis ticks should be months e.g. Jan, Feb, Mar...
                    // - scale only goes down to DD/MM when a 'Month' is chosen rather than 'All'
                    <LineChart
                        dataset={powerData}
                        xAxis={[{
                            dataKey: 'date',
                            label:'Date',
                            valueFormatter: (date) => {
                                const d = new Date(date);
                                const day = d.getDate();
                                const month = d.getMonth() + 1;
                                return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}`;
                            }
                        }]}
                        series={[{ dataKey: 'usage', label: 'kW', area: true, showMark: false }]}
                        margin={{right: 75, left: 75}}
                        height={350}
                    />
                ) : (
                    <p>No power data available</p>
                )}
            </CardContent>
        </Card>
    )
};
export default PowerUsageChart;
