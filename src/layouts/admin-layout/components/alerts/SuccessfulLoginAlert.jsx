/* eslint-disable react/prop-types */
import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faXmark } from '@fortawesome/pro-regular-svg-icons';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import * as localStorageControl from '@app/utilities/localStorageControl';

function SuccessfulLoginAlert(props) {
  const { visible, setSuccessAlertVisible } = props;
  return (
    <Paper
      sx={{
        position: 'absolute',
        zIndex: '20',
        width: '27%',
        left: '50%',
        top: '2rem',
        transform: 'translateX(-65%)',
        boxShadow: '0px 10px 30px rgba(62, 19, 77, 0.47)',
        backgroundColor: '#f4fce3',
        color: '#7AB800',
        padding: '2.2rem',
        display: visible ? 'flex' : 'none',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: '100%',
        }}
      >
        <Stack direction="row" alignItems="center" spacing="1rem">
          <FontAwesomeIcon
            icon={faCircleCheck}
            color="#7AB800"
            fontSize="2rem"
          />
          <Typography fontSize="1.45rem" color="#7AB800" letterSpacing="0.2px">
            You have successfully logged In
          </Typography>
        </Stack>
        <IconButton
          sx={{
            width: '25px',
            height: '25px',
          }}
          size="small"
          onClick={() => {
            setSuccessAlertVisible(false);
            localStorageControl.removeItem('initialLogin');
          }}
        >
          <FontAwesomeIcon icon={faXmark} fontSize="1.4rem" color="gray" />
        </IconButton>
      </Stack>
    </Paper>
  );
}

export default SuccessfulLoginAlert;
