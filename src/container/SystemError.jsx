import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Lottie from 'react-lottie-player';
import lottieJson from '../static/lottie/system-error.json';

function SystemError() {
  return (
    <Stack
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: '100vh',
      }}
      spacing={5}
    >
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 150, height: 150 }}
      />
      <Stack direction="row" spacing={1}>
        <Typography fontSize="12px">
          System Has Run Into An Unexpected Error.
        </Typography>
        <Typography
          color="blue"
          fontSize="12px"
          sx={{
            textDecoration: 'underline',
          }}
        >
          Report this error!
        </Typography>
      </Stack>
    </Stack>
  );
}

export default SystemError;
