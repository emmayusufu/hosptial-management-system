import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function InfoIcon() {
  return (
    <Box
      sx={{
        border: '2px solid purple',
        borderRadius: '50%',
        width: '10rem',
        height: '10rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      <Box
        sx={{
          border: '2px solid purple',
          borderRadius: '50%',
          width: '8rem',
          height: '8rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography fontSize="5rem" fontWeight={600} color="purple">
          i
        </Typography>
      </Box>
    </Box>
  );
}

export default InfoIcon;
