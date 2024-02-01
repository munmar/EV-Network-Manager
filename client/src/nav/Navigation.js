import React, { useState } from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';

import { Box } from '@mui/material';

const Navigation = ({ isMobile, theme, children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <TopNav handleDrawerToggle={handleDrawerToggle} isMobile={isMobile} theme={theme}/>
      <SideNav isMobile={isMobile} isDrawerOpen={isDrawerOpen} handleDrawerToggle={handleDrawerToggle} theme={theme}/>
      <Box sx={{ width: "100%", my: 10 }}>
          <Box sx={{ mx: 2 }}>
            { children }
          </Box>
      </Box>
    </Box>
  )
}

export default Navigation;