/* eslint-disable react/prop-types */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faXmarkLarge } from '@fortawesome/pro-regular-svg-icons';
import Backdrop from '@mui/material/Backdrop';

function AccessBlockedDialog(props) {
  const { open, toggleDialogState } = props;

  return (
    <>
      <Backdrop sx={{ color: '#fff', zIndex: 10 }} open={open} />
      <Paper
        sx={{
          position: 'absolute',
          zIndex: 11,
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          display: open ? 'block' : 'none',
          borderRadius: '2px',
          padding: '1rem 2rem',
          paddingBottom: '3rem',
          fontSize: '12px',
          backgroundColor: '#F9F9F9',
          border: '1px solid #CE0610',
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
              onClick={() => toggleDialogState('accessBlocked', false)}
            >
              <FontAwesomeIcon icon={faXmark} fontSize="14px" />
            </IconButton>
          </Stack>
          <Box
            sx={{
              border: '2px solid #CE0610',
              width: '7.5rem',
              height: '7.5rem',
              borderRadius: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FontAwesomeIcon
              icon={faXmarkLarge}
              color="#CE0610"
              fontSize="3.5rem"
            />
          </Box>
          <Stack direction="column" spacing="5px" alignItems="center">
            <Typography color="#CE0610" fontSize="2.2rem" fontWeight={600}>
              Access Blocked
            </Typography>
            <Stack
              spacing="1px"
              alignItems="center"
              direction="column"
              sx={{
                width: '80%',
              }}
            >
              <Typography fontSize="1.4rem" color="red" textAlign="center">
                Your Access To System has been blocked due to multiple failed
                attempts. Please contact system administrator for assistance.
              </Typography>
              <Typography
                fontSize="1.4rem"
                textAlign="center"
                color="blue"
                sx={{
                  textDecoration: 'underline',
                }}
              >
                0855329965
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}

export default AccessBlockedDialog;
