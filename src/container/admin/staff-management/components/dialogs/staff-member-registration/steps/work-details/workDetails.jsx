import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormInput from '@app/shared-components/form-input/FormInput';
import FormAutoComplete from '@app/shared-components/form-autocomplete/FormAutocomplete';

function WorkDetailsStep() {
  return (
    <Stack direction="column" spacing={4}>
      <Stack direction="row" spacing={4}>
        <FormAutoComplete options={[]} required label="Designation" />
        <FormAutoComplete options={[]} required label="Faculty Units" />
      </Stack>
      <Stack direction="row" spacing={4}>
        <FormAutoComplete options={[]} required label="Staff Status" />
        <FormInput label="Work Number" required />
      </Stack>
    </Stack>
  );
}

export default WorkDetailsStep;
