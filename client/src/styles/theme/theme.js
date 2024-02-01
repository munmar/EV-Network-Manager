import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#100030',
    },
    secondary: {
      main: '#F050F8',
    },
    info :{
      main: '#0288D1',
      lighter: '#e1f5fe'
    },
    warning: {
      main: '#DECC10',
      lighter: '#fafce5'
    },
    success: {
      main: '#14B343',
      lighter: '#e5f6e8'
    },
    error: {
      main: '#df3800',
      lighter: '#fde8e6'
    },
  },
  typography: {
    caption: {
      fontFamily: 'Rubik',
    },
    subtitle1: {
      fontFamily: 'Rubik',
    },
    subtitle2: {
      fontFamily: 'Rubik',
    },
    body1: {
      fontFamily: 'Rubik',
    },
    body2: {
      fontFamily: 'Rubik',
    },
    fontFamily: 'Roboto, Rubik',
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 46,
          height: 27,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          padding: 1,
          '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + $track': {
              opacity: 1,
              border: 'none',
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          border: '1px solid #bdbdbd',
          backgroundColor: '#fafafa',
          opacity: 1,
          transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#100030',
    },
    secondary: {
      main: '#F050F8',
    },
    warning: {
      main: '#DECC10',
    },
    success: {
      main: '#14B343',
    },
    error: {
      main: '#df3800',
    },
  },
});