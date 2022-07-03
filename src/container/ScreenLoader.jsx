import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

function ScreenLoader() {
  return (
    <Stack
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      spacing={3}
      sx={{
        height: '100vh',
      }}
    >
      <CircularProgress />
      <Typography fontSize="1.6rem">Loading....Please wait</Typography>
    </Stack>
  );
}

export default ScreenLoader;
