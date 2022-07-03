import * as React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme';
import CssBaseline from '@mui/material/CssBaseline';
import AppRoutes from '@app/routes/AppRoutes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
