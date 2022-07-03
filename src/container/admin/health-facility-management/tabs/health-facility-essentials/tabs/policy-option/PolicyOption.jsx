/* eslint-disable react/prop-types */
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchInput from '@app/shared-components/search-input/SearchInput';
import IconButton from '@mui/material/IconButton';
import {
  faFilePen,
  faEllipsisVertical,
  faTrashCan,
  faPlus,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/pro-regular-svg-icons';

import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { grey } from '@mui/material/colors';
import PolicyOptionRegistrationDialog from './components/dialogs/policy-option-registration/PolicyOptionRegistration';
import PolicyOptionSummaryDialog from './components/dialogs/policy-option-summary/PolicyOptionSummary';
import { useFacilityManagementContext } from '@app/context-providers/health-facility-management-context-provider/FacilityManagementContextProvider';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.common.black,
  },
}));

function createData(category, numberOfOptions) {
  return {
    category,
    numberOfOptions,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row, index } = props;
  const [open, setOpen] = React.useState(false);
  // StyledTableRow
  return (
    <>
      <TableRow
        sx={{
          '& > *': {
            borderBottom: 0,
            background: index % 2 !== 0 ? grey[200] : undefined,
          },
        }}
      >
        <TableCell
          align="center"
          sx={{
            backgroundColor: open ? '#782878' : grey[200],
            width: '10%',
          }}
        >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{
              color: open ? 'white' : undefined,
            }}
          >
            {open ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.category}
        </TableCell>
        <TableCell>{row.numberOfOptions}</TableCell>
        <TableCell>
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
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [
  createData('Patient Policy', 4),
  createData('Supply Policy', 15),
  createData('Procurement Policy', 2),
];

function PolicyOption() {
  const [dialogState, setDialogState] = React.useState({
    policyOptionRegistration: false,
    policyOptionSummary: false,
  });

  const toggleDialogState = (key, value) => {
    setDialogState({ ...dialogState, [key]: value });
  };

  const facilityState = useFacilityManagementContext();
  return (
    <Box>
      <Typography
        sx={{
          fontSize: '1.8rem',
          fontWeight: 600,
        }}
      >
        Policy Option
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
            toggleDialogState('policyOptionRegistration', true);
          }}
        >
          <FontAwesomeIcon
            icon={faPlus}
            fontSize="14px"
            style={{
              marginRight: '1rem',
            }}
          />
          Add Policy Option
        </Button>
      </Stack>
      {/* ======================================================= container */}
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <StyledTableCell
                align="center"
                sx={{
                  width: '10%',
                }}
              >
                More
              </StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>No. Of Option</StyledTableCell>
              <StyledTableCell>Manage</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {facilityState?.facilityPolicyOptions.map((row, index) => (
              <Row key={index} row={row} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PolicyOptionRegistrationDialog
        open={dialogState.policyOptionRegistration}
        toggleDialogState={toggleDialogState}
      />
      <PolicyOptionSummaryDialog
        open={dialogState.policyOptionSummary}
        toggleDialogState={toggleDialogState}
      />
    </Box>
  );
}

export default PolicyOption;
