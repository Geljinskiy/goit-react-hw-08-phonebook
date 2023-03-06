import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    logo: {
      fontSize: 23,
      fontWeight: 700,
      color: '#0052cc',
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
