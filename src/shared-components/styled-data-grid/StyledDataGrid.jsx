import { alpha, styled } from '@mui/material/styles';
import { DataGrid, gridClasses } from '@mui/x-data-grid';

const ODD_OPACITY = 0.2;

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  fontSize: '1.25rem',
  border: 0,
  '& .MuiDataGrid-row:nth-of-type(even)': {
    backgroundColor: alpha(theme.palette.grey[200], 0.5),
  },
  '& .MuiDataGrid-row': {
    ':hover': {
      backgroundColor: alpha(theme.palette.grey[200], 0.8),
      // cursor: 'pointer',
    },
  },
  '& .MuiDataGrid-columnHeadersInner': {
    backgroundColor: alpha(theme.palette.grey[400], 0.8),
    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 'bold',
      letterSpacing: '0.3px',
    },
  },
  '& .MuiCheckbox-root svg': {
    fontSize: '1.7rem',
  },
  '& .MuiDataGrid-footerContainer': {
    borderTop: 0,
  },
  '& .MuiDataGrid-columnHeaders': {
    borderRadius: 0,
  },
}));

export default StyledDataGrid;
