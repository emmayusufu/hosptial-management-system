/* eslint-disable import/no-cycle */
import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import {
  faFilePen,
  faEllipsisVertical,
  faTrashCan,
} from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActiveSwitch from '../shared-components/active-switch/ActiveSwitch';
import Stack from '@mui/material/Stack';

export const facilityLevelsColumnHeaders = [
  { field: 'number', headerName: 'No.', editable: false, flex: 0.3 },
  { field: 'name', headerName: 'Name', editable: false, flex: 1 },
  {
    field: 'shortName',
    headerName: 'Short Name ',
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

export const facilityOwnersColumnHeaders = [
  { field: 'number', headerName: 'No.', editable: false, flex: 0.3 },
  { field: 'name', headerName: 'Name', editable: false, flex: 1 },
  {
    field: 'description',
    headerName: 'Description ',
    editable: false,
    flex: 1,
  },
];
