/* eslint-disable react/prop-types */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/pro-solid-svg-icons';
import { useFacilityManagementContext } from '@app/context-providers/health-facility-management-context-provider/FacilityManagementContextProvider';
import LoadingButton from '@mui/lab/LoadingButton';
import FormInput from '@app/shared-components/form-input/FormInput';
import { Field, Form, Formik } from 'formik';
import { facilityOwnerValidationSchema } from '@app/container/authentication/utilities/validation-schemas/facility-management-validation-schema';

function HealthFacilityOwnerRegistration(props) {
  const facilityManagementContext = useFacilityManagementContext();

  const { open, toggleDialogState } = props;

  const [values, setValues] = React.useState({
    name: '',
    description: '',
    active: true,
  });

  const [loading, setLoading] = React.useState(false);

  /**
   * Updates the values depending on the changing input event
   * */
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const confirmFormData = (formData) => {
    if (formData.name) {
      facilityManagementContext.setRecordId(facilityManagementContext.facilityOwnerFormData?.id ?? null);
      facilityManagementContext.setFacilityOwnerFormData(formData);
      toggleDialogState('healthFacilityOwnerSummary', true);
    }
  };

  return (
    <Dialog open={open} maxWidth="sm" fullWidth>
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          margin: '4rem',
        }}
        spacing={3}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            width: '100%',
            padding: '1rem 0.1rem',
          }}
        >
          <Typography fontSize="2rem" letterSpacing="0.3px" color="initial">
            {facilityManagementContext.recordId ? 'Update ' : 'Register '}
            a Health Facility Owner
          </Typography>
          <IconButton
            sx={{
              width: '28px',
              height: '28px',
            }}
            size="small"
            onClick={() => {
              toggleDialogState('healthFacilityOwnerRegistration', false);
            }}
          >
            <FontAwesomeIcon icon={faXmark} fontSize="15px" />
          </IconButton>
        </Stack>
        <Typography
          fontStyle="italic"
          fontSize="1.4rem"
          textAlign="start"
          sx={{
            width: '100%',
          }}
          color="#D51A52"
        >
          * Mandatory Fields
        </Typography>
        <Formik
          initialValues={{
            name: facilityManagementContext.facilityOwnerFormData?.name ?? '',
            description: '',
            active: true
          }}
          validationSchema={facilityOwnerValidationSchema}
          onSubmit={confirmFormData}
        >
          {({ errors, touched }) => {
            return (
              <Form
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                }}
              >
                <Field
                  as={FormInput}
                  label="Facility Owner Name"
                  id="name"
                  name="name"
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
                <Stack
                  direction="row"
                  justifyContent="end"
                  spacing={2}
                  sx={{
                    width: '100%',
                  }}
                >
                  <Button
                    sx={{
                      width: '15rem',
                    }}
                    disabled={loading}
                    color="error"
                    variant="outlined"
                    onClick={() =>
                      toggleDialogState('healthFacilityOwnerRegistration', false)
                    }
                  >
                    Cancel
                  </Button>
                  <LoadingButton
                    type="submit"
                    onClick={confirmFormData}
                    sx={{
                      width: '15rem',
                    }}
                    loading={loading}
                    variant="contained"
                  >
                    {facilityManagementContext.recordId ? 'Update' : 'Register'}
                  </LoadingButton>
                </Stack>
              </Form>
            );
          }}
        </Formik>
      </Stack>
    </Dialog>
  );
}

export default HealthFacilityOwnerRegistration;
