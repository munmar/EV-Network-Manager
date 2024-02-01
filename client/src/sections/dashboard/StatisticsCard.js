// React Core
import React from 'react';

// Material UI Components
import {Box, Card, CardContent, Icon, Typography} from '@mui/material';


export default function StatisticsCard({ color, title, value, icon }) {

    return (
        <Card sx={{ borderRadius: 4, border: 3, borderColor: 'secondary.main', backgroundColor: 'secondary.lightest' }}>
            <CardContent sx={{ px: 2}}>
                <Box display="flex" justifyContent="space-between">
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="4rem"
                        height="4rem"
                        sx={{ m: 1, boxShadow: 3, borderRadius: 2, backgroundColor: `${color}.lighter` }}
                    >
                        <Icon fontSize="large" color={color}>
                            {icon}
                        </Icon>
                    </Box>
                    <Box>
                        <Typography variant="button" color="text">
                            {title}
                        </Typography>
                        <Typography variant="h3" fontWeight="900">{value}</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}