import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormInput from '@app/shared-components/form-input/FormInput';
import Typography from '@mui/material/Typography';
import FormAutoComplete from '@app/shared-components/form-autocomplete/FormAutocomplete';

function FingerPrintAuthenticationStep() {
  return (
    <Stack direction="column" spacing={4}>
      <Stack spacing="2rem" direction="row">
        <FormAutoComplete options={[]} required label="ID Type" />
        <FormInput label="ID Number" required />
      </Stack>
      <Stack spacing="2rem" direction="row">
        <FormAutoComplete
          sx={{
            width: '30%',
          }}
          options={[]}
          required
          label="Select Finger For scanning"
        />
        <Stack spacing="0.5rem">
          <Typography
            sx={{
              fontSize: '1.3rem',
            }}
          >
            Fingerprint Authentication
          </Typography>
          <Typography
            sx={{
              fontSize: '1.2rem',
              color: 'gray',
            }}
          >
            Place and Hold Your Finger on the Fingerprint Reader
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default FingerPrintAuthenticationStep;
