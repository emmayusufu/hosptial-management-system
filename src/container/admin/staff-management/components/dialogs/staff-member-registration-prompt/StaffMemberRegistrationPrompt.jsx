/* eslint-disable react/prop-types */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Img from '@app/static/svg/fileNotFound.svg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/pro-solid-svg-icons';

function AddStaffMemberDialogPrompt(props) {
  const { addStaffMemberDialogPromptOpen } = props;
  return (
    <Dialog open={addStaffMemberDialogPromptOpen} maxWidth="xs" fullWidth>
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          padding: '1rem',
        }}
        spacing={3}
      >
        <Stack
          alignItems="center"
          justifyContent="end"
          direction="row"
          sx={{
            width: '100%',
            padding: '10px 2px',
          }}
        >
          <FontAwesomeIcon
            icon={faXmark}
            color="gray"
            fontSize="16px"
            cursor="pointer"
          />
        </Stack>
        <img src={Img} alt="" />
        <Typography
          variant="body1"
          color="initial"
          fontWeight="bold"
          letterSpacing="0.3px"
          fontSize="15px"
        >
          Staff Member Does Not Exist
        </Typography>
        <Typography
          variant="h2"
          color="initial"
          fontSize="13px"
          sx={{}}
          textAlign="center"
        >
          The Staff Member You searched for does not exist
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            sx={{
              width: 'auto',
            }}
          >
            Add New Staff Member
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default AddStaffMemberDialogPrompt;
