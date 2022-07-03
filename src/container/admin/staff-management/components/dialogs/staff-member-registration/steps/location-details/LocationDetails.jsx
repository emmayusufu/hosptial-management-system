import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormInput from '@app/shared-components/form-input/FormInput';

function LocationDetailsStep() {
  return (
    <Stack direction="column" spacing={4}>
      <Stack direction="row" spacing={4}>
        <FormInput label="Phone Number" required />
        <FormInput label="Email" required />
      </Stack>
      <FormInput label="Home Address" required />
    </Stack>
  );
}

export default LocationDetailsStep;
