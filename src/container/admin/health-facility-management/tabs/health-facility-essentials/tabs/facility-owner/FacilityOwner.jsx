import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchInput from '@app/shared-components/search-input/SearchInput';
import StyledDataGrid from '@app/shared-components/styled-data-grid/StyledDataGrid';
import IconButton from '@mui/material/IconButton';
import {
  faFilePen,
  faEllipsisVertical,
  faTrashCan,
  faPlus,
} from '@fortawesome/pro-regular-svg-icons';
import HealthFacilityOwnerRegistration from './components/dialogs/health-facility-owner-registration/HealthFacilityOwnerRegistration';
import HealthFacilityOwnerSummaryDialog from './components/dialogs/health-facility-owner-summary/HealthFacilityOwnerSummary';
import { useFacilityManagementContext } from '@app/context-providers/health-facility-management-context-provider/FacilityManagementContextProvider';
// import swal from 'sweetalert2';

function FacilityOwner() {
  const [dialogState, setDialogState] = React.useState({
    healthFacilityOwnerRegistration: false,
    healthFacilityOwnerSummary: false,
  });

  const facilityState = useFacilityManagementContext();

  const toggleDialogState = (key, value) => {
    setDialogState({ ...dialogState, [key]: value });
  };

  const closeDialogs = () => {
    // swal('Hello world!');
    toggleDialogState('healthFacilityOwnerRegistration', false);
    toggleDialogState('healthFacilityOwnerSummary', false);
  };

  const columns = [
    { field: 'number', headerName: 'No.', editable: false, flex: 0.3 },
    { field: 'name', headerName: 'Owner', editable: false, flex: 1 },
    {
      field: 'manage',
      headerName: 'Manage',
      editable: false,
      flex: 0.3,
      renderCell: (params) => {
        return (
          <Stack spacing={1} direction="row">
            <Tooltip title="Edit">
              <IconButton onClick={() => { facilityState.setFacilityOwnerFormData(params.row); toggleDialogState('healthFacilityOwnerRegistration', true); }}>
                <FontAwesomeIcon icon={faFilePen} fontSize="14" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton onClick={() => { }}>
                <FontAwesomeIcon icon={faTrashCan} fontSize="14" />
              </IconButton>
            </Tooltip>
            <Tooltip title="More">
              <IconButton>
                <FontAwesomeIcon icon={faEllipsisVertical} fontSize="14" />
              </IconButton>
            </Tooltip>
          </Stack>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      number: 1,
      owner: 'Central Government',
    },
    {
      id: 2,
      number: 2,
      owner: 'Central Government',
    },
    {
      id: 3,
      number: 3,
      owner: 'Local Government',
    },
  ];

  return (
    <Box>
      <Typography
        sx={{
          fontSize: '1.8rem',
          fontWeight: 600,
        }}
      >
        Health Facility Owner
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          marginTop: '4rem',
          marginBottom: '1rem',
        }}
      >
        <SearchInput
          placeholder="Search"
          sx={{
            width: '30%',
          }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: '35%',
            marginBottom: '0.5rem',
          }}
          onClick={() => {
            facilityState.setFacilityOwnerFormData(null);
            toggleDialogState('healthFacilityOwnerRegistration', true);
          }}
        >
          <FontAwesomeIcon
            icon={faPlus}
            fontSize="14px"
            style={{
              marginRight: '1rem',
            }}
          />
          Add Health Facility Owner
        </Button>
      </Stack>
      <StyledDataGrid
        sx={{
          height: '30rem',
        }}
        rows={facilityState?.facilityOwners}
        columns={columns}
      />
      <HealthFacilityOwnerRegistration
        open={dialogState.healthFacilityOwnerRegistration}
        toggleDialogState={toggleDialogState}
      />
      <HealthFacilityOwnerSummaryDialog
        open={dialogState.healthFacilityOwnerSummary}
        toggleDialogState={toggleDialogState}
        closeDialogs={closeDialogs}
      />
    </Box>
  );
}

export default FacilityOwner;
