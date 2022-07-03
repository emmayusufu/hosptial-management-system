/* eslint-disable react/prop-types */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function DeletedFacilitySuccessfullyDialog(props) {
  const { deletedFacilitySuccessfullyDialogOpen } = props;
  return (
    <Dialog
      open={deletedFacilitySuccessfullyDialogOpen}
      maxWidth="xs"
      fullWidth
    >
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          padding: '1rem',
        }}
        spacing={2}
      >
        <Typography
          variant="body1"
          color="initial"
          fontWeight="bold"
          letterSpacing="0.3px"
          fontSize="15px"
        >
          Success!
        </Typography>
        <Typography variant="body1" color="initial" fontSize="13px">
          Facility has been deleted Successfully
        </Typography>
        <Button
          variant="outlined"
          color="success"
          sx={{
            width: '10rem',
          }}
        >
          Okay
        </Button>
      </Stack>
    </Dialog>
  );
}

export default DeletedFacilitySuccessfullyDialog;
