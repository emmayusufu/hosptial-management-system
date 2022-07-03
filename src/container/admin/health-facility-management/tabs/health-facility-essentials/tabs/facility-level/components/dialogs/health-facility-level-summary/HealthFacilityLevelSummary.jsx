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

function HealthFacilityLevelSummaryDialog(props) {
  const { open, toggleDialogState } = props;

  const renderDetails = () => {
    return (
      <Stack direction="column" spacing="2rem">
        <Title>Details</Title>
        <Stack direction="row" spacing={1}>
          <Key>Name:</Key>
          <Value>Regional Referral Hospital</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Short Name:</Key>
          <Value>150</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Domain Name:</Key>
          <Value>Gulu Regional Referral Hospital</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Have IPD:</Key>
          <Value>Yes</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Description:</Key>
          <Value
            sx={{
              color: 'red',
            }}
          >
            Pending
          </Value>
        </Stack>
      </Stack>
    );
  };

  const renderOtherDetails = () => {
    return (
      <Stack direction="column" spacing="2rem">
        <Title>Other Details</Title>
        <Stack direction="row" spacing={1}>
          <Key>Added By:</Key>
          <Value>Kimaswa Emmanuel</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Date Added:</Key>
          <Value>22-04-2021</Value>
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
            Health Facility Level Summary
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              sx={{
                height: '4rem',
                width: '12rem',
              }}
              variant="outlined"
              color="error"
              onClick={() =>
                toggleDialogState('healthFacilityLevelSummary', false)
              }
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
            {renderDetails()}
            <Divider flexItem />
            {renderOtherDetails()}
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default HealthFacilityLevelSummaryDialog;
