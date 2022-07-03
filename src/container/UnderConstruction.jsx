import * as React from 'react';
import underConstruction from '../static/svg/underConstruction.svg';
import Box from '@mui/material/Box';

function UnderConstruction() {
  return (
    <Box
      sx={{
        height: '80vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <img
        src={underConstruction}
        alt=""
        style={{
          width: 'auto',
          height: '50rem',
        }}
      />
    </Box>
  );
}

export default UnderConstruction;
