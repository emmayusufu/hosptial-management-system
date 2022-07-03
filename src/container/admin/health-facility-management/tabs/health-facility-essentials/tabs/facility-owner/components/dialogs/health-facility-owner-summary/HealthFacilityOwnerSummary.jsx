/* eslint-disable react/prop-types */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import colors from '@app/constants/colors';
import { useFacilityManagementContext } from '@app/context-providers/health-facility-management-context-provider/FacilityManagementContextProvider';
import * as localStorageControl from '@app/utilities/localStorageControl';
import moment from 'moment';

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

function HealthFacilityOwnerSummaryDialog(props) {
  const { open, toggleDialogState, closeDialogs } = props;
  const facilityManagementContext = useFacilityManagementContext();
  /**
   * Calls the facility owner registration handler and returns a status in the callback function
   * */
  const handleSubmit = () => {
    const facilityOwnerId = facilityManagementContext.recordId;
    if (facilityOwnerId) {
      facilityManagementContext.updateFacilityOwner(facilityOwnerId, facilityManagementContext.facilityOwnerFormData, (status) => {
        if (status === 200) {
          facilityManagementContext.setFacilityOwnerFormData(null);
          facilityManagementContext.setRecordId(null);
          closeDialogs();
        }
      });
      return false;
    }

    facilityManagementContext.facilityOwnerRegistration(facilityManagementContext.facilityOwnerFormData, (status) => {
      if (status === 201) {
        facilityManagementContext.setFacilityOwnerFormData(null);
        closeDialogs();
      }
    });
    return false;
  };

  const renderFacilityOwnerDetails = () => {
    return (
      <Stack direction="column" spacing="2rem">
        <Title>Details</Title>
        <Stack direction="row" spacing={1}>
          <Key>Owner:</Key>
          <Value>{facilityManagementContext.facilityOwnerFormData?.name}</Value>
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
          <Value>{localStorageControl.getItem('user')?.userName}</Value>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Key>Date Added:</Key>
          <Value>{moment().format('DD/MM/YYYY HH:mm a')}</Value>
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
            fontSize="2rem"
            letterSpacing="0.3px"
          >
            Health Facility Owner Summary
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
                toggleDialogState('healthFacilityOwnerSummary', false)
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
              onClick={handleSubmit}
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
            {renderFacilityOwnerDetails()}
            <Divider flexItem />
            {renderOtherDetails()}
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default HealthFacilityOwnerSummaryDialog;
