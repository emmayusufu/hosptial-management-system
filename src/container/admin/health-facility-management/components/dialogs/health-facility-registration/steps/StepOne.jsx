import * as React from 'react';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useFacilityManagementContext } from '@app/context-providers/health-facility-management-context-provider/FacilityManagementContextProvider';
import FormInput from '@app/shared-components/form-input/FormInput';
import FormTextInput from '@app/shared-components/form-text-input/FormTextInput';
import FormAutoComplete from '@app/shared-components/form-autocomplete/FormAutocomplete';

function StepOne(props) {
  const { values, handleChange, updateValues } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const { facilityOwners, facilityLevels } = useFacilityManagementContext();

  return (
    <Stack direction="column" spacing={3}>
      <Stack direction={matches ? 'column' : 'row'} spacing={4}>
        <FormAutoComplete
          required
          options={[]}
          onChange={(event, value) => {}}
          label="Facility Owner"
        />
        <FormAutoComplete
          required
          options={[]}
          onChange={(event, value) => {}}
          label="Facility Level"
        />
      </Stack>
      <Stack direction="row" spacing={4}>
        <FormInput required label="Name" />
        <FormInput required label="MOH Code" />
      </Stack>
      <Stack direction="row" spacing={4}>
        <FormInput required label="DHIS2 Code" />
        <FormInput required label="Short Name" />
      </Stack>
      <FormTextInput label="Description" />
    </Stack>
  );
}

export default StepOne;
