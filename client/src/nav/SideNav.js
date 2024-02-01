import React from 'react';
// React Router
import { useNavigate } from "react-router-dom";

// Material UI Components
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

// Material UI Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';

import { drawerWidth } from './TopNav';

const SideNav = ({ isMobile, isDrawerOpen, handleDrawerToggle, theme }) => {
  const navigate = useNavigate();

  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      path: "/",
    },
  ]

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      anchor="left"
      open={isMobile ? isDrawerOpen : true}
      onClose={handleDrawerToggle}
      sx={{
        width: drawerWidth,
        '& .MuiDrawer-paper': {
          backgroundColor: '#100030',
        },
      }}
    >
      <Box sx={{ px: 2, overflowX: 'hidden', display: 'flex', flexDirection: 'column', height: '100%'  }}>
        <Avatar
          variant="rounded"
          src="/logo.png"
          sx={{
            backgroundColor: 'secondary.main',
            mx: 'auto',
            my: theme.spacing(2),
            width: 50,
            height: 50,
          }}
        />

        <Divider variant="middle" sx={{ m: 1, borderColor: 'white' }}/>
        {/* List / Links */}
        <List>
          {menuItems.map(item => (
            <ListItemButton
              key={item.text}
              onClick={() => navigate(item.path)}
              sx={{
                backgroundColor: "secondary.main",
                '&:hover': {
                    backgroundColor: 'secondary.light', // set the hover color to a lighter shade of secondary
                },
                mb: 1,
                borderRadius: 1,
                px: 2,
              }}
            >
              <ListItemIcon>
                  {item.icon}
              </ListItemIcon>
              <ListItemText primary={<Typography fontWeight={500}>{item.text}</Typography>}/>
            </ListItemButton>
          ))}
        </List>
        <Divider variant="middle" sx={{ m: 1, borderColor: 'white' }} />
        <Box sx={{ mt: 'auto' }}> {/* This pushes the following content to the bottom */}
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: 'center', my: 3, mx: 1}}>
            <ListItemButton
              key="Settings"
              onClick={() => navigate("/settings")}
              sx={{
                backgroundColor: "secondary.main",
                '&:hover': {
                    backgroundColor: 'secondary.light', // set the hover color to a lighter shade of secondary
                },
                mb: 1,
                borderRadius: 1,
                px: 2,
              }}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={<Typography fontWeight={500}>Settings</Typography>}/>
            </ListItemButton>
          </Box>
          {/* "Last Updated" element goes here */}
          <Typography sx={{ my: 1, p: 1, textAlign: 'center', color: 'background.paper' }}>
            {/* Change date -> use api to fetch latest post date */}
            Last Updated: {new Date().toLocaleDateString()}
          </Typography>
        </Box>
      </Box>
    </Drawer>
  )
}

export default SideNav;