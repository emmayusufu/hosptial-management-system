import { createTheme } from '@mui/material/styles';
import colors from '@app/constants/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.primary,
    },
  },
  typography: {
    fontFamily: 'Poppins',
    // color: '#4B3A5A',
    fontSize: '1.4rem',
    button: {
      letterSpacing: '0.2px',
    },
    body1: {
      color: '#4B3A5A',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        // fontSize: '1.4rem',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '3px',
          textTransform: 'none',
          height: '5rem',
          fontSize: '1.3rem',
        },
      },
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // borderRadius: '2px',
        },
      },
      defaultProps: {
        // variant: 'outlined',
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderRadius: '2px',
            },
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '1.1rem',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderRadius: '4px',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0,0,0,0.4)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'purple',
            },
          },
        },
        inputRoot: {
          // fontSize: '11.5px',
          // height: '3.1rem',
        },
        paper: { fontSize: '12px' },
      },
    },
  },
});

export default theme;
