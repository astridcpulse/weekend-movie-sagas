import { createTheme } from '@mui/material';

const Theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#228B22',
        },
        secondary: {
          main: '#f50057',
        },
    },

    typography: {
        fontFamily: 'Helvetica',
        align: 'center'
    },

  });

export default Theme;