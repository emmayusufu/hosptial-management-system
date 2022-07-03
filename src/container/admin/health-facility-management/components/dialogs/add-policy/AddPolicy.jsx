/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/pro-solid-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/pro-regular-svg-icons';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { grey } from '@mui/material/colors';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.common.black,
    fontSize: '1.25rem',
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
  const isEven = index % 2 === 0;
  return (
    <>
      <TableRow
        sx={{
          '& > *': {
            borderBottom: 0,
            background: !isEven ? grey[200] : undefined,
            fontSize: '1.25rem',
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
          {index + 1}.
        </TableCell>
        <TableCell component="th" scope="row">
          {row.category}
        </TableCell>
        <TableCell>{row.numberOfOptions}</TableCell>
        <TableCell>
          <Stack spacing={1} direction="row">
            <Button
              sx={{
                height: '3rem',
                width: '14rem',
                fontSize: '1.15rem',
              }}
              color="error"
              disabled={isEven}
            >
              Remove
            </Button>
            <Button
              sx={{
                height: '3rem',
                width: '12rem',
                fontSize: '1.15rem',
              }}
            >
              Add
            </Button>
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

export default function AddPolicyDialog(props) {
  const { open, toggleDialogState } = props;

  return (
    <Dialog open={open} maxWidth="md" fullWidth scroll="body">
      <Stack
        sx={{
          padding: '4rem',
        }}
        spacing={4}
      >
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <Typography variant="body1" fontSize="2.2rem" letterSpacing="0.1px">
            Add Policy
          </Typography>
          <IconButton
            sx={{
              width: '28px',
              height: '28px',
            }}
            size="small"
            onClick={() => {
              toggleDialogState('addPolicy', false);
            }}
          >
            <FontAwesomeIcon icon={faXmark} fontSize="15px" />
          </IconButton>
        </Stack>
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
                <StyledTableCell>No.</StyledTableCell>
                <StyledTableCell>Category</StyledTableCell>
                <StyledTableCell>No. Of Option</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <Row key={index} row={row} index={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Dialog>
  );
}
