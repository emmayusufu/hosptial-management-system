/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {
  faFilePen,
  faEllipsisVertical,
  faTrashCan,
} from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActiveSwitch from '@app/shared-components/active-switch/ActiveSwitch';
import AutoComplete from '@app/shared-components/autocomplete/Autocomplete';
import SearchInput from '@app/shared-components/search-input/SearchInput';
import StyledDataGrid from '@app/shared-components/styled-data-grid/StyledDataGrid';
import { Typography } from '@mui/material';
import AddPolicyDialog from '../../components/dialogs/add-policy/AddPolicy';
import { useFacilityManagementContext } from '@app/context-providers/health-facility-management-context-provider/FacilityManagementContextProvider';

function HealthFacilitiesTab(props) {
  const [dialogState, setDialogState] = React.useState({
    addPolicy: false,
  });

  const toggleDialogState = (key, value) => {
    setDialogState({ ...dialogState, [key]: value });
  };

  const columns = [
    { field: 'number', headerName: 'No.', editable: false, flex: 0.3 },
    { field: 'facility', headerName: 'Facility', editable: false, flex: 1 },
    {
      field: 'mohCode',
      headerName: 'MoH Code',
      editable: false,
      flex: 0.5,
    },
    {
      field: 'district',
      headerName: 'District',
      editable: false,
      flex: 0.5,
    },
    {
      field: 'village',
      headerName: 'Village',
      editable: false,
      flex: 0.5,
    },
    {
      field: 'policy',
      headerName: 'Policy',
      editable: false,
      flex: 0.5,
      renderCell: (params) => {
        const { id } = params;
        if (id % 2 === 0) {
          return (
            <Button
              sx={{
                height: '3rem',
                width: '10rem',
                fontSize: '1.2rem',
                backgroundColor: '#1B8E7A',
                ':hover': {
                  backgroundColor: '#157061',
                },
              }}
              onClick={() => toggleDialogState('addPolicy', true)}
            >
              Add
            </Button>
          );
        }
        return (
          <Typography
            color="#0F0BAB"
            sx={{
              textDecoration: 'underline',
            }}
          >
            {params.row.policy}
          </Typography>
        );
      },
    },
    {
      field: 'location',
      headerName: 'Location',
      editable: false,
      flex: 0.8,
    },
    {
      field: 'active',
      headerName: 'Active',
      editable: false,
      flex: 0.5,
      renderCell: (params) => <ActiveSwitch />,
    },
    {
      field: 'manage',
      headerName: 'Manage',
      editable: false,
      flex: 0.5,
      renderCell: (params) => {
        return (
          <Stack spacing={1} direction="row">
            <Tooltip title="Edit">
              <IconButton onClick={() => {}}>
                <FontAwesomeIcon icon={faFilePen} fontSize="14" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                onClick={() => {
                  props.toggleDialogState('healthFacilityAttachments', true);
                }}
              >
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
      facility: 'Gulu Hospital',
      mohCode: Math.floor(Math.random() * 200),
      district: 'Gulu',
      village: 'Lumuli',
      policy: 'Payment Policy',
      location: 'Luro, Gulu Trading Center',
    },
    {
      id: 2,
      number: 2,
      facility: 'Mbale Hospital',
      mohCode: Math.floor(Math.random() * 200),
      district: 'Mbale',
      policy: 'Payment Policy',
      village: 'Lumuli',
      location: 'Luro, Gulu Trading Center',
    },
    {
      id: 3,
      number: 3,
      facility: 'Lira Hospital',
      mohCode: Math.floor(Math.random() * 200),
      district: 'Lira',
      village: 'Lumuli',
      policy: 'Payment Policy',
      location: 'Luro, Gulu Trading Center',
    },
  ];
  const facilityState = useFacilityManagementContext();

  return (
    <Box>
      <Stack direction="row" spacing="2rem">
        <AutoComplete
          options={[]}
          value=""
          placeholder="Search By"
          sx={{
            width: '20%',
          }}
        />
        <SearchInput
          sx={{
            width: '25%',
          }}
        />
      </Stack>
      <br />
      <StyledDataGrid
        rows={facilityState?.facilities}
        columns={columns}
        disableSelectionOnClick
        sx={{
          height: '30rem',
        }}
      />
      <AddPolicyDialog
        open={dialogState.addPolicy}
        toggleDialogState={toggleDialogState}
      />
    </Box>
  );
}

export default HealthFacilitiesTab;
