/* eslint-disable react/prop-types */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/pro-regular-svg-icons';
import Backdrop from '@mui/material/Backdrop';

function PasswordResetSuccessDialog(props) {
  const { show, onCancel } = props;

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: 10, position: 'fixed' }}
        open={show}
      />
      <Paper
        sx={{
          position: 'absolute',
          zIndex: 11,
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          display: show ? 'block' : 'none',
          borderRadius: '2px',
          padding: '10px',
          fontSize: '12px',
          backgroundColor: '#FAFFF0',
        }}
      >
        <Stack direction="column" spacing={2} alignItems="center">
          <Stack
            direction="row"
            justifyContent="end"
            sx={{
              width: '100%',
            }}
          >
            {' '}
            <IconButton
              sx={{
                width: '25px',
                height: '25px',
              }}
              size="small"
            >
              <FontAwesomeIcon
                icon={faXmark}
                fontSize="14px"
                onClick={onCancel}
              />
            </IconButton>
          </Stack>
          <Box
            sx={{
              border: '2px solid #7AB800',
              width: '5.5rem',
              height: '5.5rem',
              borderRadius: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FontAwesomeIcon icon={faCheck} color="#7AB800" fontSize="2.2rem" />
          </Box>
          <Typography color="#7AB800" fontWeight={600}>
            Success
          </Typography>
          <Typography fontSize="12px" color="#7AB800">
            You have successfully reset your password
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{
              width: '100%',
            }}
          >
            <Button
              onClick={onCancel}
              sx={{
                backgroundColor: '#7AB800',
                width: '50%',
                ':hover': {
                  backgroundColor: '#5d8c00',
                },
              }}
            >
              Okay
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}

export default PasswordResetSuccessDialog;
