import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: '"Segoe UI"',
    fontSize: 20,
    logo: {
      fontSize: 28,
      fontWeight: 500,
      color: '#0052cc',
    },
    mainLink: {
      fontSize: 19,
      color: '#0052cc',
    },
    h1: {
      fontSize: 30,
      fontWeight: 700,
      // textTransform: 'uppercase',
    },
  },
  palette: {
    primary: {
      main: '#0052cc',
      hover: '#3488f7',
    },
    secondary: {
      main: '#edf2ff',
      hover: '#3488f7',
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

export default theme;
