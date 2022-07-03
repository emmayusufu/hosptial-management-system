/* eslint-disable react/prop-types */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import colors from '@app/constants/colors';

const Title = styled(Typography)(() => ({
  fontSize: '15px',
  fontWeight: '600',
  letterSpacing: '0.3px',
  color: colors.primary,
}));

const Key = styled(Typography)(() => ({
  fontSize: '13px',
  fontWeight: '500',
  letterSpacing: '0.4px',
  color: 'black',
}));
const Value = styled(Typography)(() => ({
  fontSize: '14px',
  color: colors.primary,
}));

function StaffManagementSummaryDialog(props) {
  const { open, toggleDialogState } = props;

  const renderStaffDetails = () => {
    return (
      <Stack direction="column" spacing="2rem">
        <Title>Facility Details</Title>
        <Stack direction="row" spacing={1}>
          <Key>Title:</Key>
          <Value>Miss</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Gender:</Key>
          <Value>Female</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Name:</Key>
          <Value>Christine Namugenyi</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Date of Birth:</Key>
          <Value>10 May 1993</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>NIN:</Key>
          <Value>CM12E3Y7Y98EU</Value>
        </Stack>
      </Stack>
    );
  };
  const renderFingerPrintDetails = () => {
    return (
      <Stack direction="column" spacing="2rem">
        <Title>FingerPrint Details</Title>
        <Stack direction="row" spacing={1}>
          <Key>ID Type:</Key>
          <Value>Driving Permit</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>ID Number:</Key>
          <Value>CM1064098NJ4</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Finger Selected:</Key>
          <Value>Right Index Finger</Value>
        </Stack>
      </Stack>
    );
  };

  const renderLocationContactDetails = () => {
    return (
      <Stack direction="column" spacing="2rem">
        <Title>Location/Contact Details</Title>
        <Stack direction="row" spacing={1}>
          <Key>Phone number:</Key>
          <Value>07883252432</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Email:</Key>
          <Value>kimaswa@gmail.com</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Home Address:</Key>
          <Value>Seeta, Mukono</Value>
        </Stack>
      </Stack>
    );
  };
  const renderWorkDetails = () => {
    return (
      <Stack direction="column" spacing={1}>
        <Title>Work Details</Title>
        <Stack direction="row" spacing={1}>
          <Key>Designation:</Key>
          <Value>Officer</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Status:</Key>
          <Value>Full time</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Work Number:</Key>
          <Value>Pending</Value>
        </Stack>
      </Stack>
    );
  };

  return (
    <Dialog open={open} maxWidth="md" fullWidth>
      <Stack
        direction="column"
        sx={{
          m: '4rem',
        }}
        spacing={3}
      >
        <Stack
          sx={{
            width: '100%',
          }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="body1"
            color="initial"
            fontSize="1.8rem"
            letterSpacing="0.3px"
          >
            Staff Member Summary
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              sx={{
                height: '4rem',
                width: '12rem',
              }}
              variant="outlined"
              color="error"
              onClick={() => toggleDialogState('staffMemberSummary', false)}
            >
              Cancel
            </Button>
            <Button
              sx={{
                height: '4rem',
                width: '12rem',
                backgroundColor: '#2B99BC',
                ':hover': {
                  backgroundColor: '#1c5e73',
                },
              }}
              color="primary"
            >
              Edit
            </Button>
            <Button
              sx={{
                height: '4rem',
                width: '12rem',
              }}
              color="primary"
            >
              Save
            </Button>
          </Stack>
        </Stack>
        {/* ========================================== Grid container */}
        <Stack
          direction="row"
          sx={{
            width: '100%',
            textAlign: 'justify',
            fontSize: '12px',
          }}
          justifyContent="space-between"
          spacing={2}
        >
          <Stack
            sx={{
              width: '50%',
            }}
            direction="column"
            spacing={3}
          >
            {renderStaffDetails()}
            {renderFingerPrintDetails()}
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack
            sx={{
              width: '50%',
            }}
            direction="column"
            spacing={2}
          >
            {renderLocationContactDetails()}
            {renderWorkDetails()}
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default StaffManagementSummaryDialog;
