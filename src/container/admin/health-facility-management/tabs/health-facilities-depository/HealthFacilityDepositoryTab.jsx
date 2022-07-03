import * as React from 'react';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import {
  faEllipsisVertical,
  faTrashCan,
  faHistory,
} from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchInput from '@app/shared-components/search-input/SearchInput';
import StyledDataGrid from '@app/shared-components/styled-data-grid/StyledDataGrid';
import TextInput from '@app/shared-components/text-input/TextInput';

function HealthFacilityDepositoryTab() {
  const columns = [
    // { field: 'number', headerName: 'No.', editable: false, flex: 0.3 },
    { field: 'deposited', headerName: 'Deposited', editable: false, flex: 1 },
    {
      field: 'mohCode',
      headerName: 'MoH Code',
      editable: false,
      flex: 0.5,
    },
    {
      field: 'numberOfAttachments',
      headerName: 'District',
      editable: false,
      flex: 0.5,
    },
    {
      field: 'depositedBy',
      headerName: 'Deposited By',
      editable: false,
      flex: 0.7,
    },
    {
      field: 'dateOfDeposit',
      headerName: 'Date Of Deposit',
      editable: false,
      flex: 0.5,
    },
    {
      field: 'manage',
      headerName: 'Manage',
      editable: false,
      flex: 0.5,
      renderCell: (params) => {
        return (
          <Stack spacing={1} direction="row">
            <Tooltip title="Restore">
              <IconButton onClick={() => {}}>
                <FontAwesomeIcon icon={faHistory} fontSize="14" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton onClick={() => {}}>
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
      deposited: 'Gulu Hospital',
      mohCode: Math.floor(Math.random() * 200),
      numberOfAttachments: '774',
      depositedBy: 'Kimaswa Emmanuel',
      dateOfDeposit: '12-04-2022',
    },
    {
      number: 2,
      id: 2,
      deposited: 'Mbale Hospital',
      mohCode: Math.floor(Math.random() * 200),
      numberOfAttachments: '3',
      depositedBy: 'Kimaswa Emmanuel',
      dateOfDeposit: '12-04-2022',
    },
    {
      id: 3,
      number: 3,
      deposited: 'Lira Hospital',
      mohCode: Math.floor(Math.random() * 200),
      numberOfAttachments: '89',
      depositedBy: 'Kimaswa Emmanuel',
      dateOfDeposit: '12-04-2022',
    },
  ];

  return (
    <Box>
      <Stack direction="row" spacing="2rem">
        <TextInput
          sx={{
            width: '15%',
          }}
          type="date"
        />
        <TextInput
          sx={{
            width: '15%',
          }}
          type="date"
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
        checkboxSelection
        columns={columns}
        disableSelectionOnClick
        sx={{
          height: '30rem',
        }}
      />
    </Box>
  );
}

export default HealthFacilityDepositoryTab;
