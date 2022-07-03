/* eslint-disable react/prop-types */
import * as React from 'react';
import Paper from '@mui/material/Paper';

import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function LoadingDialog(props) {
  const { open } = props;

  return (
    <>
      <Backdrop sx={{ color: '#fff', zIndex: 20 }} open={open} />
      <Paper
        sx={{
          position: 'absolute',
          zIndex: 21,
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          display: open ? 'flex' : 'none',
          borderRadius: '2px',
          padding: '10px',
          flexDirection: 'column',
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{
            height: '10rem',
          }}
        >
          <CircularProgress />
          <Typography fontSize="13px">Loading....Pease wait</Typography>
        </Stack>
      </Paper>
    </>
  );
}

export default LoadingDialog;
