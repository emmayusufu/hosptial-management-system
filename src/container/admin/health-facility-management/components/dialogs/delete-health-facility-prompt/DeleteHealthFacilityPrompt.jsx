/* eslint-disable react/prop-types */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Img from '@app/static/svg/deletePrompt.svg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/pro-solid-svg-icons';
import { confirmable } from 'react-confirm';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { faXmarkLarge } from '@fortawesome/pro-regular-svg-icons';

function DeleteFacilityPromptDialog(props) {
  // const { open, toggleDialogState } = props;

  return (
    <Dialog open maxWidth="xs" fullWidth>
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          padding: '2rem',
          paddingBottom: '4rem',
          border: '1px solid #CE0610',
        }}
        spacing={2}
      >
        <Stack
          direction="row"
          justifyContent="end"
          sx={{
            width: '100%',
          }}
        >
          <IconButton
            sx={{
              width: '28px',
              height: '28px',
            }}
            size="small"
            onClick={() => {}}
          >
            <FontAwesomeIcon icon={faXmark} fontSize="15px" />
          </IconButton>
        </Stack>

        <Box
          sx={{
            border: '1px solid red',
            width: '7.5rem',
            height: '7.5rem',
            borderRadius: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FontAwesomeIcon icon={faXmarkLarge} color="red" fontSize="3.5rem" />
        </Box>

        <Typography
          variant="body1"
          color="initial"
          fontSize="15px"
          fontWeight={600}
          textAlign="center"
        >
          Delete Files ?
        </Typography>

        <Typography
          variant="body1"
          color="initial"
          fontSize="13px"
          textAlign="center"
        >
          Are you sure you want to Delete Gulu Hospital? Once deleted, can not
          be recovered
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            color="error"
            sx={{
              width: '10rem',
            }}
            onClick={() => {
              // toggleDialogState('deleteHealthFacilityPrompt', false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            disableElevation
            sx={{
              width: '100%',
            }}
            color="error"
            onClick={() => {}}
          >
            Delete
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default confirmable(DeleteFacilityPromptDialog);
