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
  faShareAll,
} from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActiveSwitch from '@app/shared-components/active-switch/ActiveSwitch';
import AutoComplete from '@app/shared-components/autocomplete/Autocomplete';
import SearchInput from '@app/shared-components/search-input/SearchInput';
import StyledDataGrid from '@app/shared-components/styled-data-grid/StyledDataGrid';
import Typography from '@mui/material/Typography';
import colors from '@app/constants/colors';

function RequestsTab(props) {
  const [dialogState, setDialogState] = React.useState({
    addPolicy: false,
  });

  const toggleDialogState = (key, value) => {
    setDialogState({ ...dialogState, [key]: value });
  };

  const columns = [
    { field: 'number', headerName: 'No.', editable: false, flex: 0.3 },
    {
      field: 'name',
      headerName: 'Name',
      editable: false,
      flex: 0.8,
    },
    {
      field: 'facilityUnits',
      headerName: 'Facility Units',
      editable: false,
      flex: 0.5,
      renderCell: (params) => {
        return (
          <Typography
            sx={{
              color: colors.secondary,
            }}
          >
            {params.row.facilityUnits}
          </Typography>
        );
      },
    },
    {
      field: 'designation',
      headerName: 'Designation',
      editable: false,
      flex: 0.5,
    },
    {
      field: 'approvedBy',
      headerName: 'Approved By',
      editable: false,
      flex: 0.5,
    },
    {
      field: 'dateApproved',
      headerName: 'Date Approved',
      editable: false,
      flex: 0.5,
    },
    {
      field: 'active',
      headerName: 'Active',
      editable: false,
      flex: 0.3,
      renderCell: (params) => <ActiveSwitch />,
    },
    {
      field: 'manage',
      headerName: 'Manage',
      editable: false,
      flex: 0.3,
      renderCell: (params) => {
        return (
          <Stack spacing={1} direction="row">
            <Tooltip title="Edit">
              <IconButton onClick={() => {}}>
                <FontAwesomeIcon icon={faShareAll} fontSize="14" />
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
      name: 'Gulu Hospital',
      facilityUnits: Math.floor(Math.random() * 200),
      designation: 'Deployment Officer',
      approvedBy: 'Kintu John',
      dateApproved: '02-05-2022',
    },
    {
      id: 2,
      number: 2,
      name: 'Mbale Hospital',
      facilityUnits: Math.floor(Math.random() * 200),
      designation: 'Deployment Officer',
      approvedBy: 'John Doe',
      dateApproved: '13-05-2022',
    },
    {
      id: 3,
      number: 3,
      name: 'Lira Hospital',
      facilityUnits: Math.floor(Math.random() * 200),
      designation: 'Software developer',
      approvedBy: 'Kimaswa Emmanuel',
      dateApproved: '29-05-2022',
    },
  ];

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
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        sx={{
          height: '50rem',
        }}
      />
    </Box>
  );
}

export default RequestsTab;
