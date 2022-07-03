import * as React from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import FormInput from '@app/shared-components/form-input/FormInput';
import FormAutoComplete from '@app/shared-components/form-autocomplete/FormAutocomplete';

function StepTwo(props) {
  const { values, handleChange } = props;
  return (
    <Stack direction="column" spacing={3}>
      <Stack direction="row" spacing={4}>
        <FormAutoComplete required label="District" options={[]} />
        <FormAutoComplete required label="Village" options={[]} />
      </Stack>
      <Stack direction="row" spacing={4}>
        <FormInput label="Physical Address" />
        <FormInput label="Website" />
      </Stack>
      <Stack direction="row" spacing={4}>
        <FormInput label="Email" />
        <FormInput label="Phone number" />
      </Stack>
    </Stack>
  );
}

export default StepTwo;
