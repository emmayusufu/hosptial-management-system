import * as React from 'react';
import {
  faFilePen,
  faEllipsisVertical,
  faTrashCan,
  faPlus,
  faPrint,
  faMagnifyingGlass,
  faDownload,
} from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import StyledDataGrid from '@app/shared-components/styled-data-grid/StyledDataGrid';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import SearchInput from '@app/shared-components/search-input/SearchInput';
import AutoComplete from '@app/shared-components/autocomplete/Autocomplete';

function StaffList() {
  const columns = [
    {
      field: 'id',
      headerName: 'No.',
      editable: false,
      flex: 0.3,
      renderCell: (params) => (
        <Typography fontWeight={600} variant="span" color="initial">
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          {params.row.id} .
        </Typography>
      ),
    },
    { field: 'name', headerName: 'Name', editable: false, flex: 1 },
    {
      field: 'staffNumber',
      headerName: 'Staff Number ',
      editable: false,
      flex: 1,
    },
    {
      field: 'designation',
      headerName: 'Designation ',
      editable: false,
      flex: 1,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone number',
      editable: false,
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Status',
      editable: false,
      flex: 0.8,
      renderCell: (params) => (
        <Chip
          size="small"
          sx={{
            backgroundColor:
              params.row.status === 'Full Time' ? '#00B998' : '#FF9500',
            color: 'white',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem 1rem',
          }}
          label={params.row.status}
        />
      ),
    },
    {
      field: 'manage',
      headerName: 'Manage',
      editable: false,
      flex: 0.8,
      renderCell: () => (
        <Stack spacing={1} direction="row">
          <Tooltip title="Edit">
            <IconButton>
              <FontAwesomeIcon icon={faFilePen} fontSize="14" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton>
              <FontAwesomeIcon icon={faTrashCan} fontSize="14" />
            </IconButton>
          </Tooltip>
          <Tooltip title="More">
            <IconButton>
              <FontAwesomeIcon icon={faEllipsisVertical} fontSize="14" />
            </IconButton>
          </Tooltip>
        </Stack>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      name: 'Tuka Cathy',
      staffNumber: 'IICS/0921/005',
      designation: 'Change and Deployment Officer',
      phoneNumber: '18/03/2022',
      status: 'Full Time',
    },
    {
      id: 2,
      name: 'Namugenyi Christine',
      staffNumber: 'IICS/0921/005',
      designation: 'Change and Deployment Officer',
      phoneNumber: '18/03/2022',
      status: 'Part Time',
    },
    {
      id: 3,
      name: 'Namugenyi Christine',
      staffNumber: 'IICS/0921/005',
      designation: 'Change and Deployment Officer',
      phoneNumber: '18/03/2022',
      status: 'Full Time',
    },
    {
      id: 4,
      name: 'Namugenyi Christine',
      staffNumber: 'IICS/0921/005',
      designation: 'Change and Deployment Officer',
      phoneNumber: '18/03/2022',
      status: 'Part Time',
    },
  ];

  return (
    <Box>
      <Stack
        direction="row"
        spacing="2rem"
        sx={{
          padding: '1rem',
        }}
      >
        <AutoComplete
          placeholder="Search By"
          options={[]}
          sx={{
            width: '20%',
          }}
        />
        <SearchInput
          sx={{
            width: '25%',
          }}
        />
        <div
          style={{
            flexGrow: 1,
          }}
        />
        <Button
          variant="outlined"
          color="primary"
          sx={{
            width: '18%',
          }}
        >
          <FontAwesomeIcon
            icon={faDownload}
            fontSize="14px"
            style={{
              marginRight: '1rem',
            }}
          />
          Download
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: '18%',
          }}
        >
          <FontAwesomeIcon
            icon={faPrint}
            fontSize="14px"
            style={{
              marginRight: '1rem',
            }}
          />
          Print
        </Button>
      </Stack>
      <StyledDataGrid
        style={{
          height: '500px',
        }}
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        autoHeight
      />
    </Box>
  );
}

export default StaffList;
