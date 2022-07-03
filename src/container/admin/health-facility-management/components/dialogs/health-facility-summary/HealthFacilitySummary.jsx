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

function HealthFacilitySummaryDialog(props) {
  const { open, toggleDialogState } = props;

  const renderFacilityDetails = () => {
    return (
      <Stack direction="column" spacing="2rem">
        <Title>Details</Title>
        <Stack direction="row" spacing={1}>
          <Key>Owner:</Key>
          <Value>Regional Referral Hospital</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Level:</Key>
          <Value>150</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Name:</Key>
          <Value>Gulu Regional Referral Hospital</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>MOH Code:</Key>
          <Value>GRRH</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>DHIS2 Code:</Key>
          <Value>Central Government</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Short Name:</Key>
          <Value sx={{ color: 'red' }}>Not Provided</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Description:</Key>
          <Value sx={{ color: 'red' }}>Not Provided</Value>
        </Stack>
      </Stack>
    );
  };
  const renderLocationContactDetails = () => {
    return (
      <Stack direction="column" spacing="2rem">
        <Title>Location/Contact Details</Title>
        <Stack direction="row" spacing={1}>
          <Key>District:</Key>
          <Value>Kampala</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Village:</Key>
          <Value>Kamwokya</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Physical Address:</Key>
          <Value>Mulago</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Website:</Key>
          <Value sx={{ color: 'red' }}>Not Provided</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Email:</Key>
          <Value sx={{ color: 'red' }}>Not Provided</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Phone Number:</Key>
          <Value sx={{ color: 'red' }}>Not Provided</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Secondary Phone Number:</Key>
          <Value sx={{ color: 'red' }}>Not Provided</Value>
        </Stack>
      </Stack>
    );
  };
  const renderOtherDetails = () => {
    return (
      <Stack direction="column" spacing="2rem">
        <Title>Other Details</Title>
        <Stack direction="row" spacing={1}>
          <Key>OPD Opening Time:</Key>
          <Value>8:00 am</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>OPD Closing Time:</Key>
          <Value>4:00 pm</Value>
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
            Health Facility Summary
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              sx={{
                height: '4rem',
                width: '12rem',
              }}
              variant="outlined"
              color="error"
              onClick={() => toggleDialogState('healthFacilitySummary', false)}
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
          spacing="10rem"
        >
          <Stack
            sx={{
              width: '50%',
            }}
            direction="column"
            spacing="3rem"
          >
            {renderFacilityDetails()}
            <Divider flexItem />
            {renderOtherDetails()}
          </Stack>

          <Stack
            sx={{
              width: '50%',
            }}
            direction="column"
            spacing="3rem"
          >
            {renderLocationContactDetails()}
            <Divider flexItem />
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default HealthFacilitySummaryDialog;
