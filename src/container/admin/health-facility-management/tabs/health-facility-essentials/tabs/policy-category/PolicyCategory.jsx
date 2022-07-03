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
import PolicyCategoryRegistrationDialog from './components/dialogs/policy-category-registration/PolicyCategoryRegistration';
import PolicyCategorySummaryDialog from './components/dialogs/policy-category-summary/PolicyCategorySummary';
import { useFacilityManagementContext } from '@app/context-providers/health-facility-management-context-provider/FacilityManagementContextProvider';

function PolicyCategory() {
  const [dialogState, setDialogState] = React.useState({
    policyCategoryRegistration: false,
    policyCategorySummary: false,
  });

  const facilityState = useFacilityManagementContext();

  const toggleDialogState = (key, value) => {
    setDialogState({ ...dialogState, [key]: value });
  };
  const columns = [
    { field: 'id', headerName: 'No.', editable: false, flex: 0.3 },
    {
      field: 'name',
      headerName: 'Name',
      editable: false,
      flex: 1,
    },
    {
      field: 'description',
      headerName: 'Description',
      editable: false,
      flex: 1,
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
              <IconButton onClick={() => { }}>
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
      name: 'Patient policy',
      description: 'Adipiscing',
    },
    {
      id: 2,
      number: 2,
      name: 'Supply policy',
      description: 'Adipiscing',
    },
    {
      id: 3,
      number: 3,
      name: 'Procurement policy',
      description: 'Adipiscing',
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
        Policy Category
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
            toggleDialogState('policyCategoryRegistration', true);
          }}
        >
          <FontAwesomeIcon
            icon={faPlus}
            fontSize="14px"
            style={{
              marginRight: '1rem',
            }}
          />
          Add Policy Category
        </Button>
      </Stack>
      <StyledDataGrid
        sx={{
          height: '30rem',
        }}
        rows={facilityState?.facilityPolicyCategories}
        columns={columns}
      />
      <PolicyCategoryRegistrationDialog
        open={dialogState.policyCategoryRegistration}
        toggleDialogState={toggleDialogState}
      />
      <PolicyCategorySummaryDialog
        open={dialogState.policyCategorySummary}
        toggleDialogState={toggleDialogState}
      />
    </Box>
  );
}

export default PolicyCategory;
