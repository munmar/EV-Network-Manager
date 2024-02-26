import React, { useEffect, useState } from 'react';

import { Box, Container,  Unstable_Grid2 as Grid } from '@mui/material';

// MUI Icons
import OutletRoundedIcon from '@mui/icons-material/OutletRounded';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import WifiOffRoundedIcon from '@mui/icons-material/WifiOffRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

import StatisticsCard from "../sections/dashboard/StatisticsCard";
import PowerUsageChart from "../sections/dashboard/PowerUsageChart";
import ChargingSessionsChart from "../sections/dashboard/ChargingSessionsChart";
import FinancialChart from "../sections/dashboard/FinancialChart";
import ChargingStationsTable from "../sections/dashboard/ChargingStationsTable";

// API
import { fetchStations } from "../api/stations";
import { fetchSessions } from "../api/sessions";
/** Components to create:
 *      - Statistics Cards (Icon, typography, content (number), chip (% up or down)
 *      - 2 Line Graphs (Dropdown: Time options e.g. month, week, year etc.)
 *      - Table (stations info)
 *      - Bar chart (Revenue/Cost) Dynamic with Dropdown options to select between the 2. (Monthly data only)
 *
 *
 * */
const Dashboard = ({ theme }) => {
    const [chargerStations, setChargerStations] = useState([]);
    const [powerData, setPowerData] = useState([]);
    const [sessionsData, setSessionsData] = useState([]);
    const [revenueData, setRevenueData] = useState([]);
    const [costData, setCostData] = useState([]);
    const [financialSelection, setFinancialSelection] = useState('revenue');
    const [selectedYear, setSelectedYear] = useState(0);
    const [selectedMonth, setSelectedMonth] = useState(0);

    useEffect(() => {
        // fetch charger stations data
        fetchStations()
            .then(data => setChargerStations(data))
            .catch(error => console.error('Error fetching charger stations:', error));

        // fetch session data
        fetchSessions()
            .then(sessions => {
                // Power Usage
                const dailyPowerUsage = {};
                // Sessions
                const weeklyData = Array(4).fill(0);
                const now = new Date();
                // Financials
                const monthlyRevenue = {};
                const monthlyCost = {};

                sessions.forEach(session => {
                    const date = new Date(session.start_time);
                    const usageKwh = parseFloat(session.usage_kwh);
                    const month = date.getMonth();

                    // date to be formatted as YYYY-MM-DD from datetime
                    const dateString = date.toISOString().split('T')[0];

                    if (dailyPowerUsage[dateString]) {
                        dailyPowerUsage[dateString] += usageKwh;
                    } else {
                        dailyPowerUsage[dateString] = usageKwh;
                    }

                    if (date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()) {
                        const weekOfMonth = Math.floor(date.getDate() / 7);
                        weeklyData[weekOfMonth]++;
                    }

                    // Financial calculations
                    if (monthlyRevenue[month]) {
                        monthlyRevenue[month] += parseFloat(session.revenue);
                    } else {
                        monthlyRevenue[month] = parseFloat(session.revenue);
                    }

                    if (monthlyCost[month]) {
                        monthlyCost[month] += parseFloat(session.cost);
                    } else {
                        monthlyCost[month] = parseFloat(session.cost);
                    }
                });

                const revenueData = Object.entries(monthlyRevenue).map(([month, revenue]) => ({month, revenue}));
                const costData = Object.entries(monthlyCost).map(([month, cost]) => ({month, cost}));

                // chartData holds an array of objects containing the date, usage information
                const chartData = Object.entries(dailyPowerUsage).map(([date, usage]) => ({
                    date: new Date(date),
                    usage
                }))
                    // sort the array by dates
                    .sort((a, b) => a.date - b.date);

                setPowerData(chartData);
                setSessionsData(weeklyData);
                setRevenueData(revenueData);
                setCostData(costData)
            })
            .catch(error => console.error('Error fetching sessions:', error));
    }, []);

    // Year and Month state handler
    const handlePeriodChange = (year, month) => {
        setSelectedYear(year);
        console.log('Selected Year:', year);
        setSelectedMonth(month);
        console.log('Selected Month:', month);
    };

    const countChargerStatus = (status) => {
        return chargerStations.reduce((total, station) => {
            return total + station.charger_set.filter(charger => charger.status === status).length;
        }, 0);
    };

    // Data for the chargers stats cards
    const chargerStatusItems = [
        {
            title: 'Connected',
            icon: <OutletRoundedIcon fontSize="large" />,
            color: 'info',
            value: countChargerStatus('Connected')
        },
        {
            title: 'Online',
            icon: <WifiRoundedIcon fontSize="large" />,
            color: 'success',
            value: countChargerStatus('Online')
        },
        {
            title: 'Offline',
            icon: <WifiOffRoundedIcon fontSize="large" />,
            color: 'error',
            value: countChargerStatus('Offline')
        },
        {
            title: 'Faulty',
            icon: <WarningAmberRoundedIcon fontSize="large" />,
            color: 'warning',
            value: countChargerStatus('Faulty')
        },
    ]

    return (
        <Box
            sx={{
                flexGrow: 1,
            }}
        >
            <Container maxWidth="xl">
                <Grid
                    container
                    spacing={3}
                >
                    {chargerStatusItems.map(item => (
                        <Grid
                            key={item.title}
                            xs={12}
                            sm={6}
                            lg={3}
                        >
                            <StatisticsCard
                                color={item.color}
                                icon={item.icon}
                                title={item.title}
                                value={item.value}
                            />
                        </Grid>
                    ))}

                    <Grid
                        xs={12}
                        lg={8}
                    >
                        {/* Power Usage chart goes here (line) */}
                        <PowerUsageChart
                            powerData={powerData}
                            selectedYear={selectedYear}
                            selectedMonth={selectedMonth}
                            onPeriodChange={handlePeriodChange}
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        md={6}
                        lg={4}
                    >
                        {/* Charging Session chart goes here (line) */}
                        <ChargingSessionsChart
                            sessionsData={sessionsData}
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        lg={8}
                    >
                        {/* Charging Stations table goes here */}
                        <ChargingStationsTable
                            theme={theme}
                            chargerStations={chargerStations}
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        md={6}
                        lg={4}
                    >
                        {/* Financial chart goes here (bar) */}
                        <FinancialChart revenueData={revenueData} costData={costData}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default Dashboard
