/* eslint-disable react/prop-types */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SuccessDialog(props) {
  const { open, description } = props;
  return (
    <Dialog open={open} maxWidth="xs" fullWidth>
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          padding: '1rem',
          border: '1px solid #7AB800',
        }}
        spacing={2}
      >
        <Typography
          variant="body1"
          color="initial"
          fontWeight="bold"
          letterSpacing="0.3px"
          fontSize="15px"
        >
          Success!
        </Typography>
        <Typography variant="body1" color="initial" fontSize="13px">
          {description}
        </Typography>
        <Button
          sx={{
            background: '#7AB800',
            width: '50%',
          }}
        >
          Okay
        </Button>
      </Stack>
    </Dialog>
  );
}

export default SuccessDialog;
