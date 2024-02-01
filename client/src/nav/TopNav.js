import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

export const drawerWidth = 240;

const TopNav = ({ isMobile, handleDrawerToggle, theme }) => {

  return (
    <AppBar
      sx={{
        width: isMobile ? "100%" : `calc(100% - ${drawerWidth}px)`,
        backgroundColor: 'primary.main',
        color: 'black',
        boxShadow: " 0 4px 4px -2px #180048"
      }}
      elevation={0}
    >
      <Toolbar>
        {/* ... */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: 2,
            display: { sm: 'none' }
          }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon sx={{ color: 'secondary.main' }}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default TopNav;