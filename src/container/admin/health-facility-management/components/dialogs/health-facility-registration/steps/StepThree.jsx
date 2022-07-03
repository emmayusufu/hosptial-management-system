import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FormTimePicker from '@app/shared-components/form-time-picker/FormTimePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/pro-solid-svg-icons';
import PropTypes from 'prop-types';
import UploadSVG from '@app/static/svg/upload.svg';
import { FileDrop } from 'react-file-drop';
import { Button } from '@mui/material';

function StepThree(props) {
  const { values, setValues } = props;
  return (
    <Stack>
      <Stack direction="row" justifyContent="center" spacing={3}>
        <FormTimePicker
          label="OPD Opening Time"
          required
          sx={{
            width: '25%',
          }}
        />
        <FormTimePicker
          required
          label="OPD Closing Time"
          sx={{
            width: '25%',
          }}
        />
      </Stack>
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        sx={{
          m: '2rem 0rem',
        }}
      >
        <br />
        <FileDrop
          onDrop={(files, event) => console.log('onDrop!', files, event)}
        >
          <Typography
            fontSize="13px"
            textAlign="center"
            fontWeight={500}
            letterSpacing="0.3px"
          >
            Upload Health Facility Logo
          </Typography>
          <br />
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              border: '1px dashed rgba(0,0,0,0.2)',
              height: '22rem',
              width: '28rem',
            }}
          >
            <img src={UploadSVG} alt="" />
            <br />
            <Typography fontSize="12px" fontWeight={500} letterSpacing="0.3px">
              Drag and drop
            </Typography>
            <Typography fontSize="12px" fontWeight={500} letterSpacing="0.3px">
              or
            </Typography>
            <br />
            <Button
              sx={{
                height: '3.5rem',
              }}
            >
              <FontAwesomeIcon
                icon={faPaperclip}
                fontSize="1.4rem"
                style={{
                  marginRight: '1rem',
                }}
              />
              From Computer
            </Button>
          </Stack>
          <br />
          <Typography fontSize="12px" fontWeight={500} letterSpacing="0.3px">
            Maximum upload : 10MB
          </Typography>
        </FileDrop>
      </Stack>
    </Stack>
  );
}

export default StepThree;
