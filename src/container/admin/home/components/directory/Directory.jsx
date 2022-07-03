import * as React from 'react';
import Paper from '@mui/material/Paper';
import { GridToolbarContainer } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import StyledDataGrid from '@app/shared-components/styled-data-grid/StyledDataGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faListDots,
  faFilePen,
  faEllipsisVertical,
  faTrashCan,
} from '@fortawesome/pro-regular-svg-icons';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

const rows = [
  {
    id: 1,
    name: 'Mbale Hospital',
    phoneNumber: '( 404 ) 786 432 231',
    location: 'Gulu District',
  },
  {
    id: 2,
    name: 'Gulu Hospital',
    phoneNumber: '( 404 ) 786 432 231',
    location: 'Gulu District',
  },
  {
    id: 3,
    name: 'Mbarara Hospital',
    phoneNumber: '( 404 ) 786 432 231',
    location: 'Gulu District',
  },
  {
    id: 4,
    name: 'Apak Hospital',
    phoneNumber: '( 404 ) 786 432 231',
    location: 'Gulu District',
  },
  {
    id: 5,
    name: 'Apak Hospital',
    phoneNumber: '( 404 ) 786 432 231',
    location: 'Gulu District',
  },
  {
    id: 6,
    name: 'Apak Hospital',
    phoneNumber: '( 404 ) 786 432 231',
    location: 'Gulu District',
  },
  {
    id: 7,
    name: 'Apak Hospital',
    phoneNumber: '( 404 ) 786 432 231',
    location: 'Gulu District',
  },
  {
    id: 8,
    name: 'Apak Hospital',
    phoneNumber: '( 404 ) 786 432 231',
    location: 'Gulu District',
  },
];

const columns = [
  { field: 'name', headerName: 'Name', editable: false, flex: 1 },
  {
    field: 'phoneNumber',
    headerName: 'Phone number',
    editable: false,
    flex: 1,
  },
  {
    field: 'location',
    headerName: 'Location',
    editable: false,
    flex: 1,
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

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <Stack
        sx={{
          width: '100%',
          padding: '1.5rem',
        }}
        direction="row"
        justifyContent="space-between"
      >
        <Typography
          fontWeight={600}
          sx={{
            fontSize: '1.8rem',
          }}
          color="black"
          letterSpacing="0.3px"
        >
          Health Facility Directory
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <FontAwesomeIcon icon={faListDots} color="#0621B5" fontSize="18px" />

          <Typography
            color="#0621B5"
            sx={{
              fontSize: 14,
            }}
          >
            See All
          </Typography>
        </Stack>
      </Stack>
    </GridToolbarContainer>
  );
}

function DashboardDirectory() {
  return (
    <Paper
      variant="outlined"
      sx={{
        height: '100%',
      }}
    >
      <StyledDataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        style={{
          height: '100%',
        }}
        checkboxSelection
        disableSelectionOnClick
        autoHeight
        hideFooter
        hideFooterPagination
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </Paper>
  );
}

export default DashboardDirectory;
