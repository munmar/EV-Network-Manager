import React from 'react';

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

/** Components to create:
 *      - Statistics Cards (Icon, typography, content (number), chip (% up or down)
 *      - 2 Line Graphs (Dropdown: Time options e.g. month, week, year etc.)
 *      - Table (stations info)
 *      - Bar chart (Revenue/Cost) Dynamic with Dropdown options to select between the 2. (Monthly data only)
 *
 *
 * */
const Dashboard = ({ theme }) => {

    //  Replace value with value taken from database
    const chargerStatusItems = [
        {
            title: 'Connected',
            icon: <OutletRoundedIcon fontSize="large" />,
            color: 'info',
            value: '10'
        },
        {
            title: 'Online',
            icon: <WifiRoundedIcon fontSize="large" />,
            color: 'success',
            value: '10'
        },
        {
            title: 'Offline',
            icon: <WifiOffRoundedIcon fontSize="large" />,
            color: 'error',
            value: '10'
        },
        {
            title: 'Faulty',
            icon: <WarningAmberRoundedIcon fontSize="large" />,
            color: 'warning',
            value: '10'
        },
    ]

    return (
        <Box
            sx={{
                flexGrow: 1,
                py: 2
            }}
        >
            <Container maxWidth="xl">
                <Grid
                    container
                    spacing={3}
                >
                    {chargerStatusItems.map(item => (
                        <Grid
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
                        <PowerUsageChart />
                    </Grid>
                    <Grid
                        xs={12}
                        md={6}
                        lg={4}
                    >
                        {/* Charging Session chart goes here (line) */}
                        <ChargingSessionsChart />
                    </Grid>
                    <Grid
                        xs={12}
                        lg={8}
                    >
                        {/* Charging Stations table goes here */}
                        <ChargingStationsTable theme={theme}/>
                    </Grid>
                    <Grid
                        xs={12}
                        md={6}
                        lg={4}
                    >
                        {/* Financial chart goes here (bar) */}
                        <FinancialChart />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default Dashboard
