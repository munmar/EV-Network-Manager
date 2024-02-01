// React Base
import React from 'react';
// React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Material UI Components
import { Box, useMediaQuery } from '@mui/material';

// Styling
import { ThemeProvider } from '@mui/system';
import { lightTheme } from './styles/theme/theme';
import { useTheme } from '@mui/material/styles';

// CSS Styling
import './styles/App.css';

// Navigation
import Navigation from './nav/Navigation';

// Pages
import Dashboard from "./pages/Dashboard";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
      <Router>
          <ThemeProvider theme={lightTheme}>
              <Navigation theme={theme} isMobile={isMobile}>
                <Box sx={{ mx: isDesktop ? 20: 'auto', pt: 5 }}>
                  <Routes>
                    <Route path="/" element={<Dashboard theme={theme}/>}/>
                  </Routes>
                </Box>
              </Navigation>
          </ThemeProvider>
      </Router>
  );
}

export default App;