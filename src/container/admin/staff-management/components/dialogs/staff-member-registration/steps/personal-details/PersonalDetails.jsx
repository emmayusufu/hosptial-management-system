import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import FormInput from '@app/shared-components/form-input/FormInput';
import FormAutoComplete from '@app/shared-components/form-autocomplete/FormAutocomplete';

function PersonalDetailsStep() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack direction="column" spacing={4}>
      <Stack direction={matches ? 'column' : 'row'} spacing={4}>
        <FormAutoComplete options={[]} required label="Title" />
        <FormInput label="Staff Number" />
      </Stack>
      <Stack direction="row" spacing={4}>
        <FormInput label="First Name" required />
        <FormInput label="Other Name" />
      </Stack>
      <Stack direction="row" spacing={4}>
        <FormInput label="Last Name" required />
        <FormInput label="Date of birth" required type="date" />
      </Stack>
      <Stack direction="row" spacing={4}>
        <FormAutoComplete options={[]} required label="Gender" />
        <FormAutoComplete options={[]} required label="Select Nationality" />
      </Stack>
    </Stack>
  );
}

export default PersonalDetailsStep;
